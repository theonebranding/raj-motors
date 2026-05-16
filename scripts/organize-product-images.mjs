import { copyFileSync, existsSync, mkdirSync, readdirSync, rmSync } from 'node:fs';
import { join } from 'node:path';

const root = process.cwd();
const sourceDir = join(root, 'public', 'products', 'pdf-images');
const productsDir = join(root, 'public', 'products');
const modelsDir = join(productsDir, 'models');

const models = [
  { slug: 'ace-pro-ev', family: 'ace', sourceBase: 'Ace  Pro EV - Brochure (1)' },
  { slug: 'ace-pro-bi-fuel', family: 'ace', sourceBase: 'ACE PRO Bi-fuel - Brochure' },
  { slug: 'ace-gold-plus-xl', family: 'ace', sourceBase: 'Ace Gold Plus XL-Brochure' },
  { slug: 'ace-gold-petrol', family: 'ace', sourceBase: '20250130_ace_gold_petrol' },
  { slug: 'ace-2-0-cng', family: 'ace', sourceBase: '20250130_ace_2dot0_cng' },
  { slug: 'intra-v20', family: 'intra', sourceBase: '20250130_intra_v20' },
  { slug: 'intra-v30', family: 'intra', sourceBase: '20250130_intra_v30' },
  { slug: 'intra-v50', family: 'intra', sourceBase: '20250130_intra_v50' },
  { slug: 'intra-v70', family: 'intra', sourceBase: '20250130_intra_v70' },
  { slug: 'intra-ev', family: 'intra', sourceBase: 'Intra EV - Product Brochure (14)' },
  { slug: 'yodha-1700', family: 'yodha', sourceBase: '20231012_yodha_1700' },
  { slug: 'magic', family: 'magic', sourceBase: 'Magic Leaflet - Horizontal_CTC-1' },
  { slug: 'ev-range-2026', family: 'ev-range', sourceBase: 'EV Range Brochure 2026 - Low Res' },
];

const pageNumber = (fileName) => {
  const match = fileName.match(/_page(\d+)\.png$/i);
  return match ? Number(match[1]) : Number.MAX_SAFE_INTEGER;
};

const resetNumberedPngs = (directory) => {
  mkdirSync(directory, { recursive: true });

  for (const entry of readdirSync(directory, { withFileTypes: true })) {
    if (entry.isFile() && /^\d{2}\.png$/i.test(entry.name)) {
      rmSync(join(directory, entry.name));
    }
  }
};

if (!existsSync(sourceDir)) {
  console.log(`Skipped product image organization. Missing source directory: ${sourceDir}`);
  process.exit(0);
}

const sourceFiles = readdirSync(sourceDir).filter((fileName) => fileName.toLowerCase().endsWith('.png'));
const familyFiles = new Map();
const counts = {};

for (const model of models) {
  const matchedFiles = sourceFiles
    .filter((fileName) => fileName.startsWith(`${model.sourceBase}_page`))
    .sort((a, b) => pageNumber(a) - pageNumber(b));

  const modelDirectory = join(modelsDir, model.slug);
  resetNumberedPngs(modelDirectory);

  matchedFiles.forEach((fileName, index) => {
    const targetName = `${String(index + 1).padStart(2, '0')}.png`;
    copyFileSync(join(sourceDir, fileName), join(modelDirectory, targetName));
  });

  counts[model.slug] = matchedFiles.length;

  if (!familyFiles.has(model.family)) {
    familyFiles.set(model.family, []);
  }

  familyFiles.get(model.family).push(...matchedFiles.map((fileName) => join(sourceDir, fileName)));
}

for (const [familySlug, files] of familyFiles.entries()) {
  const familyDirectory = join(productsDir, familySlug);
  resetNumberedPngs(familyDirectory);

  files.forEach((sourcePath, index) => {
    const targetName = `${String(index + 1).padStart(2, '0')}.png`;
    copyFileSync(sourcePath, join(familyDirectory, targetName));
  });

  counts[familySlug] = files.length;
}

console.log('Organized product images:');
for (const [slug, count] of Object.entries(counts)) {
  console.log(`- ${slug}: ${count}`);
}
