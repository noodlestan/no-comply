import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
    experimental: { contentLayer: true },
    integrations: [
        starlight({
            title: '[Sandbox]',
            social: {
                github: 'https://github.com/noodlestan',
                discord: 'https://discord.gg/b8DkbJSF9z',
            },
            sidebar: [
                {
                    label: 'Viz',
                    items: [{ label: 'Example', slug: 'viz/example' }],
                },
                {
                    label: 'Decision Types',
                    link: 'decision-types',
                },
            ],
        }),
    ],
});
