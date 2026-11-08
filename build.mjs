import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { tokens } from './src/tokens.mjs';

const root = path.dirname(fileURLToPath(import.meta.url));
const read = (p) => fs.readFileSync(path.join(root, p));
const data = (p, mime) => `data:${mime};base64,${read(p).toString('base64')}`;

const assets = {
  BG_DARK: data('assets/backdrop-dark.png', 'image/png'),
  BG_LIGHT: data('assets/backdrop-light.png', 'image/png'),
  BOW_BUTTON: data('assets/bow-button-corner.png', 'image/png'),
  BOW_CORNER: data('assets/bow-corner.png', 'image/png'),
  NOTES_CORNER: data('assets/notes-corner.png', 'image/png'),
  BUBBLE_BL: data('assets/bubble-bl.png', 'image/png'),
  BUBBLE_TR: data('assets/bubble-tr.png', 'image/png'),
  BUNNY: data('assets/bunny-cut2.png', 'image/png'),
  HEARTS: data('assets/hearts.jpg', 'image/jpeg'),
  HOME_ART: data('assets/home-art.jpg', 'image/jpeg'),
  SIDEBAR_ART: data('assets/sidebar-ivan.jpg', 'image/jpeg'),
  WING_TILE_H: data('assets/wing-tile-h.png', 'image/png'),
  WING_TILE_V: data('assets/wing-tile-v.png', 'image/png'),
};

let css = fs.readFileSync(path.join(root, 'src/theme.css'), 'utf8');
for (const [key, value] of Object.entries(assets)) {
  css = css.split(`__${key}__`).join(value);
}

const template = fs.readFileSync(path.join(root, 'src/client.template.js'), 'utf8');
const client = template
  .replace('__ID__', JSON.stringify('dsh-theme-orbit-stage'))
  .replace('__CSS__', JSON.stringify(css))
  .replace('__TOKENS__', JSON.stringify(tokens))
  .replace('__WING_TILE_H__', JSON.stringify(assets.WING_TILE_H))
  .replace('__WING_TILE_V__', JSON.stringify(assets.WING_TILE_V));

fs.mkdirSync(path.join(root, 'lib'), { recursive: true });
fs.writeFileSync(path.join(root, 'lib/client.js'), client);
console.log(`built lib/client.js (${(client.length / 1024).toFixed(1)} KiB)`);
