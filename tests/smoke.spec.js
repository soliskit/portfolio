const { test, expect } = require('@playwright/test')

// These are behavior checks, not a resume copy baseline or a visual snapshot.
test('home page loads its sections and local assets without runtime errors', async ({
  page,
  request
}) => {
  const errors = []
  page.on('pageerror', (error) => errors.push(error.message))
  page.on('console', (message) => {
    if (message.type() === 'error') errors.push(message.text())
  })
  const response = await page.goto('/')
  expect(response.status()).toBe(200)
  await expect(page).toHaveTitle('David Solis')
  await expect(
    page.getByRole('heading', { name: 'David Solis', exact: true })
  ).toBeVisible()
  for (const name of [
    'About Me',
    'How I Work',
    'Experience',
    'Skills',
    'Education'
  ]) {
    await expect(page.getByRole('heading', { name, exact: true })).toBeVisible()
  }
  // The theme button appears after hydration, so its presence gates this check.
  await expect(
    page.getByRole('button', { name: /Switch to .* theme/ })
  ).toBeVisible()
  const photo = page.getByRole('img', { name: 'David Solis', exact: true })
  await expect(photo).toBeVisible()
  await expect
    .poll(() => photo.evaluate((img) => img.complete && img.naturalWidth > 0))
    .toBe(true)
  const assets = await page
    .locator(
      'link[rel="icon"], link[rel="apple-touch-icon"], link[as="font"], meta[property="og:image"]'
    )
    .evaluateAll((elements) =>
      elements.map(
        (el) => el.getAttribute('href') || el.getAttribute('content')
      )
    )
  expect(assets.length).toBeGreaterThan(0)
  for (const asset of assets) {
    // Even absolute share-preview URLs are checked locally, never on production.
    const url = new URL(asset, 'http://127.0.0.1:3000')
    const result = await request.get(url.pathname + url.search)
    expect(result.status(), asset).toBe(200)
    expect(result.headers()['content-type'], asset).toMatch(
      /^(image\/|font\/|application\/(?:font|octet-stream))/
    )
    expect((await result.body()).length, asset).toBeGreaterThan(0)
  }
  expect(errors).toEqual([])
})

test('navigation reaches each section and contact points to the public email', async ({
  page
}) => {
  await page.goto('/')
  const links = page.getByRole('navigation').getByRole('link')
  await expect(links).toHaveCount(4)
  const destinations = [
    ['How I Work', '#how-i-work'],
    ['Experience', '#experience'],
    ['Skills', '#skills'],
    ['Education', '#education']
  ]
  for (const [label, href] of destinations) {
    const link = page
      .getByRole('navigation')
      .getByRole('link', { name: label, exact: true })
    await expect(link).toHaveCount(1)
    await expect(link).toHaveAttribute('href', href)
    const target = page.locator(`section${href}`)
    await expect(target).toHaveCount(1)
    await expect(
      target.getByRole('heading', { name: label, exact: true })
    ).toHaveCount(1)
    await link.click()
    await expect.poll(() => new URL(page.url()).hash).toBe(href)
    await expect(target).toBeVisible()
    await expect(target).toBeInViewport()
  }
  const contact = page.getByRole('link', {
    name: 'hello@davidsolis.me',
    exact: true
  })
  await expect(contact).toHaveCount(1)
  await expect(contact).toBeVisible()
  await expect(contact).toHaveAttribute('href', 'mailto:hello@davidsolis.me')
  // Do not open the mail app or send a message.
})

for (const scheme of ['light', 'dark']) {
  test(`theme follows ${scheme} system preference and persists an explicit choice`, async ({
    page
  }) => {
    await page.emulateMedia({ colorScheme: scheme })
    await page.goto('/')
    const next = scheme === 'dark' ? 'light' : 'dark'
    const toggle = page.getByRole('button', {
      name: `Switch to ${next} theme`,
      exact: true
    })
    await expect(toggle).toBeVisible()
    await expect(page.locator('html')).not.toHaveAttribute('data-theme')
    await expect(page.locator('body')).toHaveCSS(
      'color',
      scheme === 'dark' ? 'rgba(255, 255, 255, 0.9)' : 'rgba(0, 0, 0, 0.85)'
    )
    await toggle.click()
    await expect(page.locator('html')).toHaveAttribute('data-theme', next)
    await expect
      .poll(() => page.evaluate(() => localStorage.getItem('theme')))
      .toBe(next)
    await expect(page.locator('html')).toHaveCSS('color-scheme', next)
    await expect(page.locator('body')).toHaveCSS(
      'color',
      next === 'dark' ? 'rgba(255, 255, 255, 0.9)' : 'rgba(0, 0, 0, 0.85)'
    )
    await page.reload()
    await expect(page.locator('html')).toHaveAttribute('data-theme', next)
    await expect(page.locator('html')).toHaveCSS('color-scheme', next)
    const reverse = page.getByRole('button', {
      name: `Switch to ${scheme} theme`,
      exact: true
    })
    await expect(reverse).toBeVisible()
    await reverse.click()
    await expect(page.locator('html')).toHaveAttribute('data-theme', scheme)
  })
}
