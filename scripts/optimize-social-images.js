const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputDir = 'assets/images';
const outputDir = 'assets/images/responsive';

// Create output directory if it doesn't exist
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

const socialImages = [
  {
    input: 'GhostBPA-social-preview-wide.png',
    sizes: [1200, 800, 400],
    aspectRatio: 1200/630 // Standard social media aspect ratio
  },
  {
    input: 'GhostBPA-social-preview.png',
    sizes: [800, 400, 200],
    aspectRatio: 1 // Square aspect ratio
  }
];

async function optimizeSocialImages() {
  try {
    for (const image of socialImages) {
      const inputPath = path.join(inputDir, image.input);
      const baseName = path.basename(image.input, path.extname(image.input));

      // Read the input image
      const inputBuffer = await fs.promises.readFile(inputPath);
      const metadata = await sharp(inputBuffer).metadata();

      // Generate WebP and PNG versions for each size
      for (const size of image.sizes) {
        const height = Math.round(size / image.aspectRatio);

        // Generate WebP
        await sharp(inputBuffer)
          .resize(size, height, {
            fit: 'cover',
            position: 'center'
          })
          .webp({ quality: 80 })
          .toFile(path.join(outputDir, `${baseName}-${size}.webp`));

        // Generate PNG fallback
        await sharp(inputBuffer)
          .resize(size, height, {
            fit: 'cover',
            position: 'center'
          })
          .png({ quality: 80 })
          .toFile(path.join(outputDir, `${baseName}-${size}.png`));

        console.log(`Generated ${size}px version of ${image.input}`);
      }
    }
    console.log('Social image optimization complete!');
  } catch (error) {
    console.error('Error optimizing social images:', error);
  }
}

optimizeSocialImages(); 