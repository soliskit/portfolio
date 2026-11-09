# David Solis' website

A single-page portfolio built with Next.js and React. The home page has an introduction, experience, skills, education, a light/dark theme toggle, and an email link.

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
   PORT=4000 npm run dev
   ```

4. Open [http://localhost:4000](http://localhost:4000). Edits to the page appear during development.

To check a production build locally, run `npm run build` and then serve the `out` folder, for example `python3 -m http.server 4000 --directory out`. No other environment variables are needed for the current page.

## Edit the site

- `pages/index.js` assembles the home page and holds its title, description, and share-preview tags in one `meta` object.
- `components/Header.js`, `AboutMe.js`, `HowIWork.js`, `Experience.js`, `Skills.js`, `Education.js`, `Nav.js`, `Footer.js`, and `ThemeToggle.js` hold the visible sections and navigation. Their CSS modules and `pages/index.module.css` control the layout.
- `pages/_document.js` sets the page language, favicons, and the script that applies a saved theme before the page appears.
- `public/images/share-preview.png` is the 1200 x 630 image shown when the link is shared, such as in iMessage. iMessage shows it about 260 points wide, so it holds only the photo, name, and a short tagline in large type. To update it, render a new 1200 x 630 image in the site's dark purple style, check that the text is readable at about 260 px wide, save it under a new filename so apps that cached the old image fetch the new one, and point `meta.image` in `pages/index.js` to it.
- Other images and icons live under `public/`.

## Deploy

The site is published to GitHub Pages as a static export. The workflow in `.github/workflows/pages.yml` builds `main` and deploys it on every push to `main`. In the repository's Pages settings, the source is GitHub Actions and the custom domain is set. Its DNS records are set at the domain's DNS host: four A records for the apex pointing to GitHub's Pages addresses, and a `www` CNAME to `soliskit.github.io`. GitHub redirects `www` to the apex.

To review a change, push a branch and open a pull request. After merging into `main`, check the Pages workflow run and verify the live site in a browser. A pull request does not publish the live site.
