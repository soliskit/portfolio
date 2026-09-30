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

- `pages/index.js` assembles the home page and holds its title, description, and share-preview tags in one `meta` object.
- `components/Header.js`, `AboutMe.js`, `HowIWork.js`, `Experience.js`, `Skills.js`, `Education.js`, `Nav.js`, `Footer.js`, and `ThemeToggle.js` hold the visible sections and navigation. Their CSS modules and `pages/index.module.css` control the layout.
- `pages/_document.js` sets the page language, favicons, and the script that applies a saved theme before the page appears.
- `public/images/webpage.png` is the 1200 x 630 share-preview image. To update it, render a new 1200 x 630 image in the site's dark purple style with the current About copy, inspect the saved PNG, and point `meta.image` in `pages/index.js` to it.
- Other images and icons live under `public/`.

## Deploy

The site is deployed through Vercel. To set up a fresh deployment, import this repository into a Vercel project, select the Next.js framework preset, and deploy the `main` branch. Vercel can detect the build from `package.json`; the production command is `npm run build`. To use your own domain, add it in that project's Vercel domain settings and point its DNS records to the values Vercel supplies. Those account-specific DNS values are not stored in this repository.

For this existing site, push a branch and open a pull request to review a change. After merging into `main`, check the Vercel deployment and verify [davidsolis.me](https://www.davidsolis.me/) in a browser. A preview deployment for a pull request is not the live site.
