import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';
import SolidSVG from 'vite-plugin-solid-svg';

export default defineConfig({
	plugins: [solidPlugin(), SolidSVG()],
	server: {
		port: 3000,
	},
	build: {
		target: 'esnext',
		rollupOptions: {
			output: {
				advancedChunks: {
					groups: [
						{
							name: 'babel',
							test: /babel/,
						},
						{
							name: 'typscript',
							test: /typescript/,
						},
					],
				},
			},
		},
	},
	css: {
		preprocessorOptions: {
			scss: {
				additionalData: `@use "@no-comply/standard-ui/scss/globals.scss" as *;`,
			},
		},
	},
});
