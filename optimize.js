import sharp from "sharp";
import fs from "fs/promises";
import path from "path";

const IMAGES_DIR = path.join(process.cwd(), "public/images");

async function optimizeImage(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  if (![".webp", ".webp", ".webp", ".webp"].includes(ext)) return;

  const fileDir = path.dirname(filePath);
  const fileName = path.basename(filePath, ext);
  const newFilePath = path.join(fileDir, `${fileName}.webp`);

  try {
    await sharp(filePath).webp({ quality: 70 }).toFile(newFilePath);

    if (filePath !== newFilePath) {
      await fs.unlink(filePath);
    }

    console.log(`Optimized: ${filePath} → ${newFilePath}`);
  } catch (err) {
    console.error(`Error processing ${filePath}:`, err);
  }
}

async function traverseDirectory(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      await traverseDirectory(fullPath);
    } else {
      await optimizeImage(fullPath);
    }
  }
}

traverseDirectory(IMAGES_DIR)
  .then(() => console.log("All images optimized!"))
  .catch((err) => console.error(err));
