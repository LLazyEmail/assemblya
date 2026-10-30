#!/usr/bin/env node
/**
 * Report markdown image refs under docs/ + i18n/ that do not resolve on disk.
 * Exit 0 always (advisory) unless --strict.
 */
import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const strict = process.argv.includes('--strict');
const roots = ['docs', 'i18n'];
const imgRe = /!\[[^\]]*\]\(([^)\s]+)(?:\s+"[^"]*")?\)/g;
let missing = 0;

function walk(dir, out = []) {
  if (!fs.existsSync(dir)) return out;
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, ent.name);
    if (ent.isDirectory()) walk(p, out);
    else if (ent.name.endsWith('.md') || ent.name.endsWith('.mdx')) out.push(p);
  }
  return out;
}

for (const base of roots) {
  for (const file of walk(path.join(root, base))) {
    const text = fs.readFileSync(file, 'utf8');
    for (const m of text.matchAll(imgRe)) {
      let url = m[1];
      if (url.startsWith('http') || url.startsWith('pathname://')) continue;
      let target;
      if (url.startsWith('/img/')) target = path.join(root, 'static', url.slice(1));
      else target = path.resolve(path.dirname(file), url);
      if (!fs.existsSync(target)) {
        missing++;
        console.log(`${path.relative(root, file)} -> ${url}`);
      }
    }
  }
}
console.log(`\nMissing image refs: ${missing}`);
if (strict && missing > 0) process.exit(1);
