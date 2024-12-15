import solidPlugin from 'vite-plugin-solid';
import SolidSVG from 'vite-plugin-solid-svg';
import topLevelAwait from 'vite-plugin-top-level-await';

import { makeViteConfig } from '../../../../config/vite-app.config';

const plugins = [solidPlugin(), SolidSVG(), topLevelAwait()];

export default makeViteConfig(__dirname, {}, plugins);
