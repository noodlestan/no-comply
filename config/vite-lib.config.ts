/* eslint-disable import/no-extraneous-dependencies */
import { resolve } from 'path';

import type { PluginOption, UserConfig } from 'vite';
import { defineConfig } from 'vite';

export const makeViteConfig = (
    dir: string,
    libName: string,
    plugins?: PluginOption[],
): UserConfig => {
    return defineConfig({
        plugins,
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
            // rollupOptions: {
            //     external: ['tone'],
            //     output: {
            //         globals: {
            //             tone: 'Tone',
            //         },
            //     },
            // },
        },
    });
};
