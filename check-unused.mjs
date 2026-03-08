import { globSync } from 'glob';
import fs from 'fs';
import path from 'path';

const allFiles = globSync('src/**/*.{js,jsx}');
const components = globSync('src/components/**/*.{jsx,js}');

console.log(`Checking ${components.length} components...`);

const unused = [];

for (const comp of components) {
    const filename = path.basename(comp);
    const nameWithoutExt = path.parse(filename).name;

    // Ignore index files or app itself if applicable
    if (nameWithoutExt === 'index') continue;

    let isUsed = false;
    for (const file of allFiles) {
        if (file === comp) continue; // skip self

        const content = fs.readFileSync(file, 'utf8');
        // Simple regex: look for the component name, or the filename
        if (content.includes(`/${nameWithoutExt}`) || content.includes(`<${nameWithoutExt}`) || content.includes(`from "${nameWithoutExt}"`) || content.includes(`from '${nameWithoutExt}'`)) {
            isUsed = true;
            break;
        }
    }

    if (!isUsed) {
        unused.push(comp);
    }
}

console.log('Potentially unused components:', unused);
