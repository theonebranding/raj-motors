import { mkdir, readdir, copyFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const websiteRoot = path.resolve(scriptDir, '..');
const sourceDir = path.resolve(websiteRoot, '..', 'Data');
const targetDir = path.resolve(websiteRoot, 'public', 'brochures');

await mkdir(targetDir, { recursive: true });

let pdfFiles = [];

try {
  pdfFiles = (await readdir(sourceDir)).filter((fileName) => fileName.toLowerCase().endsWith('.pdf'));
} catch (error) {
  if (error?.code !== 'ENOENT') {
    throw error;
  }

  const existingFiles = (await readdir(targetDir)).filter((fileName) => fileName.toLowerCase().endsWith('.pdf'));
  console.log(`Data folder not found at ${sourceDir}. Using ${existingFiles.length} existing public brochure files.`);
  process.exit(0);
}

await Promise.all(
  pdfFiles.map(async (fileName) => {
    await copyFile(path.join(sourceDir, fileName), path.join(targetDir, fileName));
  }),
);

console.log(`Copied ${pdfFiles.length} brochure files to public/brochures`);
