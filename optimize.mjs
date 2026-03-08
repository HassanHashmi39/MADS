import { globSync } from 'glob';
import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

async function optimizeImages() {
    const folders = [
        'src/assets/gallery/*.{png,jpg,JPG,jpeg}',
        'src/assets/untitled folder/*.{png,jpg,JPG,jpeg}',
        'src/assets/brands/*.{png,jpg,JPG,jpeg}',
        'src/assets/contact.png',
        'src/assets/contact2.png',
        'src/assets/contact-visual.png',
        'src/assets/Quill.png',
        'src/assets/vector.png'
    ];

    let files = [];
    for (const f of folders) {
        const matches = globSync(f);
        files = files.concat(matches);
    }

    console.log(`Found ${files.length} images to optimize.`);

    for (const file of files) {
        if (!fs.existsSync(file)) continue;

        const ext = path.extname(file);
        if (!['.png', '.jpg', '.jpeg', '.JPG'].includes(ext)) continue;

        // Scale down image slightly if it's too big, mostly the 14MB ones!
        const dest = file.replace(ext, '.webp');
        console.log(`Optimizing: ${file} -> ${dest}`);
        try {
            await sharp(file)
                .resize({ width: 1200, withoutEnlargement: true }) // Downscale large images
                .webp({ quality: 80, effort: 4 })
                .toFile(dest);
            fs.unlinkSync(file); // remove original
        } catch (e) {
            console.error("Error processing " + file, e);
        }
    }
}

optimizeImages();
