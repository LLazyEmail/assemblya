#!/usr/bin/env node
/** Compare docs/*.md vs i18n/uk/.../current/*.md paths. Advisory unless --strict. */
import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const strict = process.argv.includes('--strict');
const enRoot = path.join(root, 'docs');
const ukRoot = path.join(root, 'i18n/uk/docusaurus-plugin-content-docs/current');

function mdFiles(dir) {
  const out = [];
  if (!fs.existsSync(dir)) return out;
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, ent.name);
    if (ent.isDirectory()) out.push(...mdFiles(p));
    else if (ent.name.endsWith('.md')) out.push(path.relative(dir, p).split(path.sep).join('/'));
  }
  return out;
}

const en = new Set(mdFiles(enRoot));
const uk = new Set(mdFiles(ukRoot));
const onlyEn = [...en].filter((f) => !uk.has(f)).sort();
const onlyUk = [...uk].filter((f) => !en.has(f)).sort();
console.log('Only in EN docs/:', onlyEn.length);
onlyEn.forEach((f) => console.log('  EN', f));
console.log('Only in UK i18n:', onlyUk.length);
onlyUk.forEach((f) => console.log('  UK', f));
if (strict && (onlyEn.length || onlyUk.length)) process.exit(1);
