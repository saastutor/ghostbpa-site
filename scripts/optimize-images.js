const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// Configuration
const config = {
  quality: 80,
  sizes: {
    small: 400,
    medium: 800,
    large: 1200
  }
};

// Directories to process
const directories = [
  {
    input: 'assets/images',
    output: 'assets/images/responsive',
    exclude: ['responsive', '.DS_Store']
  },
  {
    input: 'assets/badges',
    output: 'assets/badges/responsive',
    exclude: ['responsive', 'originals', '.DS_Store']
  }
];

async function convertToWebP(inputPath, outputPath, size = null) {
  try {
    const image = sharp(inputPath);
    
    if (size) {
      image.resize(size);
    }
    
    await image.webp({ quality: config.quality })
      .toFile(outputPath);
    
    console.log(`Converted ${inputPath} to ${outputPath}`);
  } catch (error) {
    console.error(`Error converting ${inputPath}:`, error);
  }
}

async function processDirectory(dirConfig) {
  const { input, output, exclude } = dirConfig;
  
  // Create output directory if it doesn't exist
  if (!fs.existsSync(output)) {
    fs.mkdirSync(output, { recursive: true });
  }
  
  // Get all files in the directory
  const files = fs.readdirSync(input);
  
  for (const file of files) {
    if (exclude.includes(file)) continue;
    
    const inputPath = path.join(input, file);
    const fileExt = path.extname(file).toLowerCase();
    const fileName = path.basename(file, fileExt);
    
    // Skip if not an image file
    if (!['.jpg', '.jpeg', '.png', '.svg'].includes(fileExt)) continue;
    
    // Convert to WebP
    const outputPath = path.join(output, `${fileName}.webp`);
    await convertToWebP(inputPath, outputPath);
    
    // For non-SVG images, create responsive versions
    if (fileExt !== '.svg') {
      for (const [sizeName, size] of Object.entries(config.sizes)) {
        const responsiveOutputPath = path.join(output, `${fileName}-${sizeName}.webp`);
        await convertToWebP(inputPath, responsiveOutputPath, size);
      }
    }
  }
}

// Process all directories
async function main() {
  for (const dirConfig of directories) {
    await processDirectory(dirConfig);
  }
}

main().catch(console.error); 