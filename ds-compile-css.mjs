// One-shot CSS compilation for design-sync — not part of the LP app
import { createRequire } from 'module';
import { readFileSync, writeFileSync } from 'fs';
import { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const require = createRequire(import.meta.url);

const postcss = require('./node_modules/postcss/lib/postcss.js');
const tailwindPlugin = require('./node_modules/@tailwindcss/postcss/dist/index.js');

const inputPath = resolve(__dirname, 'app/globals.css');
const outputPath = resolve(__dirname, '.design-sync-compiled.css');

const css = readFileSync(inputPath, 'utf8');

const result = await postcss([tailwindPlugin()]).process(css, {
  from: inputPath,
  to: outputPath,
});

writeFileSync(outputPath, result.css);
console.log(`Compiled CSS written to ${outputPath} (${result.css.length} bytes)`);
