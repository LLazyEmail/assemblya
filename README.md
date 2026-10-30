# AssemblyA

Documentation site built with [Docusaurus](https://docusaurus.io/).

Live site (upstream): https://atherdon.github.io/assemblya/

Fork (this repo): https://github.com/LLazyEmail/assemblya — Pages URL when enabled: https://llazyemail.github.io/assemblya/

## Getting started

```bash
npm install
npm start
```

### Languages (i18n)

The site supports **English** (`en`, default) and **Ukrainian** (`uk`).

```bash
# Develop a specific locale
npm start -- --locale uk

# Refresh translation JSON scaffolds after UI string changes
npm run write-translations -- --locale uk
```

- English docs live in `docs/`
- Ukrainian doc translations live in `i18n/uk/docusaurus-plugin-content-docs/current/`
- Navbar/footer/sidebar UI strings: `i18n/uk/docusaurus-theme-classic/` and `i18n/uk/code.json`
- Use the navbar language dropdown to switch locales on the deployed site (`/uk/...`)

## Scripts

| Command | Description |
| --- | --- |
| `npm start` | Start the local development server (default locale) |
| `npm start -- --locale uk` | Start the Ukrainian locale |
| `npm run build` | Build all locales into `build/` |
| `npm run serve` | Serve the production build locally |
| `npm run clear` | Clear the Docusaurus cache |
| `npm run write-translations -- --locale uk` | Update Ukrainian translation JSON files |



## Requirements

- Node.js 20+ (20 LTS or 22/24; CI uses Node 24)
- npm 10+

## Agent / contributor notes

See [AGENTS.md](./AGENTS.md) for AI-agent conventions, EN/UK sync rules, and media caveats.

## Continuous integration

Pull requests should stay green via GitHub Actions (install → build). Prefer reusable workflows from [`LLazyEmail/documentation-actions`](https://github.com/LLazyEmail/documentation-actions) `@v1`.

## GitHub Pages deployment

Pushes to `main` trigger `.github/workflows/deploy.yml`, which builds the site and deploys it with GitHub Pages.

Pull requests to `main` run `.github/workflows/test-deploy.yml` to verify the site builds.

After merging, set **Settings → Pages → Build and deployment → Source** to **GitHub Actions**.
