/* eslint-disable import/no-extraneous-dependencies */
/*
    <reference types="vitest" />
    <reference types="vite/client" />
*/

import { UserConfig, defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';

export const makeVitestConfig = (): UserConfig => {
    return defineConfig({
        plugins: [solidPlugin()],
        resolve: {
            conditions: ['development', 'browser'],
        },
    });
};
