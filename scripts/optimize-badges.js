const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputDir = 'assets/badges/originals';
const outputDir = 'assets/badges';

// Create directories if they don't exist
if (!fs.existsSync(inputDir)) fs.mkdirSync(inputDir, { recursive: true });
if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir, { recursive: true });

// Sizes we want to generate
const sizes = [
  { suffix: 'small', height: 60 },
  { suffix: 'retina', height: 120 },
];

async function optimizeImage(file) {
  const filename = path.parse(file).name;
  
  // Process each size
  for (const size of sizes) {
    await sharp(path.join(inputDir, file))
      .resize({ height: size.height, width: size.height, fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
      .png({ quality: 90 })
      .toFile(path.join(outputDir, `${filename}-${size.suffix}.png`));
  }
  
  console.log(`Processed ${file}`);
}

// Process all images
async function processImages() {
  try {
    const files = fs.readdirSync(inputDir).filter(file => 
      file.toLowerCase().endsWith('.png') || 
      file.toLowerCase().endsWith('.jpg') || 
      file.toLowerCase().endsWith('.jpeg')
    );

    console.log(`Found ${files.length} images to process`);
    
    for (const file of files) {
      await optimizeImage(file);
    }
    
    console.log('All images processed successfully!');
  } catch (error) {
    console.error('Error processing images:', error);
  }
}

processImages(); 