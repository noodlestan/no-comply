import { readFileSync } from 'fs';
import { resolve } from 'path';

import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';
import SolidSVG from 'vite-plugin-solid-svg';

const NAME = JSON.parse(readFileSync('package.json', 'utf8')).name;

const dirname = import.meta.dirname;

export default defineConfig({
	plugins: [solidPlugin(), SolidSVG()],
	resolve: {
		alias: [
			{ find: '~build', replacement: resolve(dirname, 'build') },
			{ find: '@', replacement: resolve(dirname, 'src') },
		],
	},
	server: {
		port: 3000,
	},
	build: {
		outDir: 'dist/esm/',
		emptyOutDir: true,
		target: 'esnext',
		lib: {
			entry: resolve(dirname, 'src/index.ts'),
			name: NAME,
			fileName: 'index',
			formats: ['es'],
		},
		rollupOptions: {
			tsconfig: './tsconfig.vite.json',
			external: [
				'@no-comply/solid-contexts',
				'@no-comply/solid-accessibility',
				'@no-comply/solid-primitives',
				'@solid-primitives/set',
				// '@solid-primitives/resize-observer',
				'lucide-solid',
				'solid-js',
			],
		},
	},
	css: {
		preprocessorOptions: {
			scss: {
				additionalData: `@use "~build/globals.scss" as *;`,
			},
		},
	},
});
