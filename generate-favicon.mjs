import sharp from 'sharp'

const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128">
  <circle cx="64" cy="64" r="64" fill="#C0001A"/>
  <ellipse cx="44" cy="34" rx="8" ry="11" fill="white"/>
  <rect x="41.5" y="44" width="5" height="38" rx="2.5" fill="white"/>
  <rect x="74" y="24" width="3.5" height="16" rx="1.5" fill="white"/>
  <rect x="80" y="24" width="3.5" height="16" rx="1.5" fill="white"/>
  <rect x="86" y="24" width="3.5" height="16" rx="1.5" fill="white"/>
  <rect x="81" y="40" width="3.5" height="42" rx="1.5" fill="white"/>
</svg>`

const buffer = Buffer.from(svg)

await sharp(buffer).resize(32, 32).png().toFile('public/favicon.png')
await sharp(buffer).resize(180, 180).png().toFile('public/apple-touch-icon.png')

console.log('✅ Favicon generated!')