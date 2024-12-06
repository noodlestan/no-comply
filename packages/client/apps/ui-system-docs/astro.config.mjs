// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import path from 'path';

import solidJs from '@astrojs/solid-js';

import starlightTypeDoc, { typeDocSidebarGroup } from 'starlight-typedoc';

// https://astro.build/config
export default defineConfig({
    integrations: [
        starlight({
            title: 'My Docs',
            social: {
                github: 'https://github.com/withastro/starlight',
            },
            plugins: [
                // Generate the documentation.
                starlightTypeDoc({
                    entryPoints: ['../../libs/ui-system/src/*'],
                    tsconfig: '../../libs/ui-system/tsconfig.json',
                    typeDoc: {
                        options: {
                            navigation: {
                                includeCategories: false,
                                includeGroups: true,
                                excludeReferences: true,
                                includeFolders: false,
                            },
                        },
                        entryFileName: 'index',
                        excludeExternals: true,
                        categorizeByGroup: true,
                    },
                }),
            ],
            sidebar: [
                {
                    label: 'Getting started',
                    items: ['getting-started'],
                },
                {
                    label: 'Features',
                    autogenerate: { directory: 'features' },
                },
                typeDocSidebarGroup,
            ],
            customCss: [
                // Relative path to your custom CSS file
                './src/styles/custom.css',
            ],
        }),
        solidJs(),
    ],
    vite: {
        resolve: {
            alias: {
                '@noodlestan/ui-system': path.resolve('../../libs/ui-system/src'),
            },
        },
    },
});
