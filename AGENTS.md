# AGENTS.md — guide for AI coding agents

This repository is the **LLazyEmail** fork of AssemBLYA docs (Docusaurus 3, EN + UK locales).

## Goals

1. Keep EN (`docs/`) and UK (`i18n/uk/...`) in sync when editing content.
2. Prefer documentation-actions reusable workflows for CI.
3. Do not delete content without an explicit request.

## Setup

```bash
npm ci
npm start          # EN
npm run docs:uk    # UK locale
npm run build
npm run typecheck
npm run format:check
npm run check:images
npm run check:i18n
```

Node 24 (see `.nvmrc` and CI). Package manager: npm.

## Media

Some image references in the docs point to files that are missing or corrupt in this fork (notably under `static/img/hornets/cheap/`). Builds warn but do not fail (`onBrokenMarkdownImages: 'warn'`). Restore binaries in a follow-up; do not invent replacements.

## CI

Workflows under `.github/workflows/` call reusable workflows from `LLazyEmail/documentation-actions@v1`. Prefer that pattern for new checks.

## Style

- Prettier for formatting (`npm run format` / `format:check`).
- ESLint for JS/TS.
- Markdownlint config in `.markdownlint.json`.
- EditorConfig is present.
