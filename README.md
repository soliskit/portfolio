# David Solis' website

A single-page portfolio built with Next.js and React. The home page has an introduction, experience, skills, education, a light/dark theme toggle, and an email link. The live site is [davidsolis.me](https://www.davidsolis.me/).

## Run it locally

1. Install a recent Node.js version compatible with the project's Next.js release, along with npm. Check the `engines` requirement of the installed Next.js version if your build reports an unsupported Node version.
2. Clone this repository and enter it:

   ```bash
   git clone https://github.com/soliskit/portfolio.git
   cd portfolio
   ```

3. Install the locked dependencies and start the development server:

   ```bash
   npm ci
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000). Edits to the page appear during development.

To check a production build locally, run `npm run build` and then `npm run start`. No environment variables are needed for the current page.

## Edit the site

- `pages/index.js` assembles the home page and sets its page title and one description tag.
- `components/Header.js`, `AboutMe.js`, `Experience.js`, `Skills.js`, `Education.js`, `Nav.js`, `Footer.js`, and `ThemeToggle.js` hold the visible sections and navigation. Their CSS modules and `pages/index.module.css` control the layout.
- `pages/_document.js` sets document-level metadata and the Open Graph share image. If you change the description, check both this file and `pages/index.js` so they stay consistent.
- `public/images/webpage.png` is the 1200 x 630 share-preview image. To update it, capture the live home page at a 1200 x 630 desktop viewport in its default light theme, at the very top of the page, then replace this file. Check the saved PNG visually before committing. The image is selected by `og:image` in `pages/_document.js`.
- Other images and icons live under `public/`.

The old Nextra starter instructions do not apply to this site. It does not use Markdown posts or an RSS feed.

## Deploy

The site is deployed through Vercel. To set up a fresh deployment, import this repository into a Vercel project, select the Next.js framework preset, and deploy the `main` branch. Vercel can detect the build from `package.json`; the production command is `npm run build`. To use your own domain, add it in that project's Vercel domain settings and point its DNS records to the values Vercel supplies. Those account-specific DNS values are not stored in this repository.

For this existing site, push a branch and open a pull request to review a change. After merging into `main`, check the Vercel deployment and verify [davidsolis.me](https://www.davidsolis.me/) in a browser. A preview deployment for a pull request is not the live site.
