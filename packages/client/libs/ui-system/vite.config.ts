import { readFileSync } from 'fs';

import solidPlugin from 'vite-plugin-solid';
import SolidSVG from 'vite-plugin-solid-svg';
import topLevelAwait from 'vite-plugin-top-level-await';

import { makeViteConfig } from '../../../../config/vite-lib.config';

const NAME = JSON.parse(readFileSync('package.json', 'utf8')).name;

const plugins = [solidPlugin(), SolidSVG(), topLevelAwait()];

export default makeViteConfig(__dirname, NAME, plugins);
