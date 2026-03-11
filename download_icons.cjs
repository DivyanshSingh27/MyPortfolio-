const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const deviconMap = {
    javascript: 'javascript/javascript-original.svg',
    java: 'java/java-original.svg',
    css3: 'css3/css3-original.svg',
    html5: 'html5/html5-original.svg',
    mysql: 'mysql/mysql-original.svg',
    oracle: 'oracle/oracle-original.svg',
    spring: 'spring/spring-original.svg',
    springboot: 'spring/spring-original.svg',
    hibernate: 'hibernate/hibernate-original.svg',
    git: 'git/git-original.svg',
    github: 'github/github-original.svg',
    visualstudiocode: 'vscode/vscode-original.svg',
    intellijidea: 'intellij/intellij-original.svg'
};

const downloadAndConvert = async () => {
    const outDir = path.join(__dirname, 'public', 'images');
    if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

    for (const [name, endpath] of Object.entries(deviconMap)) {
        try {
            const url = `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${endpath}`;
            const resp = await fetch(url);
            if (!resp.ok) throw new Error(`HTTP ${resp.status}`);
            const arrayBuf = await resp.arrayBuffer();
            const buffer = Buffer.from(arrayBuf);
            const outputPath = path.join(outDir, `${name}.png`);
            const resizedLogo = await sharp(buffer, { density: 300 })
                .resize(400, 400, { fit: 'contain', background: { r: 255, g: 255, b: 255, alpha: 0 } })
                .png()
                .toBuffer();

            await sharp({
                create: {
                    width: 1400,
                    height: 1000,
                    channels: 4,
                    background: { r: 255, g: 255, b: 255, alpha: 1 }
                }
            })
                .composite([
                    { input: resizedLogo, left: 150, top: 300 },
                    { input: resizedLogo, left: 850, top: 300 }
                ])
                .png()
                .toFile(outputPath);
            console.log(`Downloaded ${name}`);
        } catch (err) {
            console.error(`Failed ${name}: ${err.message}`);
        }
    }
}
downloadAndConvert();
