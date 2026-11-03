# AssemblyA

<!-- fork-status -->

> **Fork note:** This is the [LLazyEmail/assemblya](https://github.com/LLazyEmail/assemblya) working fork of [atherdon/assemblya](https://github.com/atherdon/assemblya). Upstream is the original docs site; this fork is where modernization, CI, and EN/UK sync work happens.

Docusaurus documentation site for AssemBLYA (EN + UK).

## Requirements

- Node.js 24 (see `.nvmrc`)
- npm

## Development

```bash
npm ci
npm start          # English
npm run docs:uk    # Ukrainian locale
npm run build
npm run typecheck
npm run format:check
npm run check:images
npm run check:i18n
```

## CI

Pull requests run test-deploy, typecheck, format check, i18n sync, and missing-images checks via reusable workflows from `LLazyEmail/documentation-actions`.

Broken or missing media images warn but do not fail the build (`onBrokenMarkdownImages: 'warn'`).
