# AGENTS.md — guide for AI coding agents

This repository is the **LLazyEmail** fork of AssemBLYA docs (Docusaurus 3, EN + UK locales).

## Goals

1. Keep `npm run build` green for both `en` and `uk`.
2. Never delete existing docs content; annotate or extend instead.
3. Keep English (`docs/`) and Ukrainian (`i18n/uk/docusaurus-plugin-content-docs/current/`) in sync when editing.
4. Open small, single-purpose draft PRs against this fork's `main` (not upstream).

## Setup

```bash
npm install
npm start          # EN
npm start -- --locale uk
npm run build      # both locales
npm run serve
```

Node.js **>= 20** (CI uses 24).

## Layout

| Path | Purpose |
| --- | --- |
| `docs/` | English documentation (source of truth for structure) |
| `i18n/uk/.../current/` | Ukrainian translations of docs |
| `static/img/` | Site images (some historically corrupt / incomplete) |
| `src/` | React pages / theme CSS |
| `.github/workflows/` | CI (prefer `LLazyEmail/documentation-actions` @v1) |

## Media caveats

- Some JPEG/PNG files in `static/img/` are corrupt or missing; builds should use `onBrokenMarkdownImages: 'warn'`.
- Prefer fixing path typos (`butterly`→`butterfly`, `nayavy`→`nayavu`) over deleting references.
- Do not invent binary assets; list what humans must restore.

## CI / documentation-actions

Adopt reusable workflows from `LLazyEmail/documentation-actions` pinned **`@v1`** (v1.1.1+): markdownlint, lychee, changelog, auto-rebase, star-request, docs-index, Docusaurus test-deploy / Pages deploy. One adoption PR per workflow.

Pages deploy callers may need `permissions.contents: write` until documentation-actions#33 ships.

## Commits

Include trailer:

```
Co-authored-by: petroved <arthur.tkachenko.netweight@gmail.com>
```

## Secrets

No AssemblyAI or third-party API keys are required for the docs site build. GitHub Pages needs the `github-pages` environment enabled by a human.
