import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';
import SolidSVG from 'vite-plugin-solid-svg';
import topLevelAwait from 'vite-plugin-top-level-await';

export default defineConfig({
	plugins: [solidPlugin(), SolidSVG(), topLevelAwait()],
	server: {
		port: 3000,
	},
	build: {
		target: 'esnext',
		cssMinify: false,
	},
	css: {
		preprocessorOptions: {
			scss: {
				additionalData: `@use "@no-comply/standard-ui/scss/globals.scss" as *;`,
			},
		},
	},
});
