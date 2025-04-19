const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputImage = 'assets/images/head2-optimized.jpg';
const outputDir = 'assets/images/responsive';
const sizes = [320, 640, 1024, 1280, 1920];

// Create output directory if it doesn't exist
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

async function generateResponsiveImages() {
  try {
    // Read the input image
    const image = sharp(inputImage);
    const metadata = await image.metadata();

    // Generate WebP and JPEG versions for each size
    for (const size of sizes) {
      const aspectRatio = metadata.width / metadata.height;
      const height = Math.round(size / aspectRatio);

      // Generate WebP
      await image
        .resize(size, height)
        .webp({ quality: 80 })
        .toFile(path.join(outputDir, `head2-optimized-${size}.webp`));

      // Generate JPEG
      await image
        .resize(size, height)
        .jpeg({ quality: 80 })
        .toFile(path.join(outputDir, `head2-optimized-${size}.jpg`));

      console.log(`Generated ${size}px images`);
    }

    console.log('Responsive images generated successfully!');
  } catch (error) {
    console.error('Error generating responsive images:', error);
  }
}

generateResponsiveImages(); 