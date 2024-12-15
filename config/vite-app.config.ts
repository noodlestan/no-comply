/* eslint-disable import/no-extraneous-dependencies */
// import { resolve } from 'path';

import type { PluginOption, UserConfig } from 'vite';
import { defineConfig } from 'vite';

/* TODO devtools issue with monorepo? fails on import

https://github.com/thetarnav/solid-devtools

No known conditions for "./vite" specifier in "solid-devtools" package [plugin externalize-deps]

  The plugin "externalize-deps" was triggered by this import

    ../../config/vite-app.config.ts:5:21:
      5 │ import devtools from 'solid-devtools/vite';

      */
// import devtools from 'solid-devtools/vite';

export const makeViteConfig = (
    dir: string,
    config: UserConfig = {},
    plugins?: PluginOption[],
): UserConfig => {
    return defineConfig({
        ...config,
        plugins: [
            // devtools({
            //     autoname: true,
            // }),
            ...(plugins || []),
        ],
        // resolve: {
        //     alias: [{ find: '@', replacement: resolve(dir, 'src') }],
        // },
        server: {
            port: 3000,
        },
        build: {
            target: 'esnext',
        },
    });
};
