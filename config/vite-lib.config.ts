/* eslint-disable import/no-extraneous-dependencies */
import { resolve } from 'path';

import type { UserConfig } from 'vite';
import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';
import SolidSVG from 'vite-plugin-solid-svg';
import topLevelAwait from 'vite-plugin-top-level-await';
import wasm from 'vite-plugin-wasm';

export const makeViteConfig = (dir: string, libName: string): UserConfig => {
    return defineConfig({
        plugins: [solidPlugin(), SolidSVG(), wasm(), topLevelAwait()],
        resolve: {
            alias: [{ find: '@', replacement: resolve(dir, 'src') }],
        },
        server: {
            port: 3000,
        },
        build: {
            target: 'esnext',
            lib: {
                entry: resolve(dir, 'src/index.ts'),
                name: libName,
                fileName: 'index',
            },
            rollupOptions: {
                external: ['tone'],
                output: {
                    globals: {
                        tone: 'Tone',
                    },
                },
            },
        },
    });
};
