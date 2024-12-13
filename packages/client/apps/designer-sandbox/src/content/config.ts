import { docsSchema } from '@astrojs/starlight/schema';
import { file } from 'astro/loaders'; // Not available with legacy API
import { defineCollection, z } from 'astro:content';

const decisions = defineCollection({
    loader: async () => {
        return [
            {
                id: 'type-b',
                title: 'type-b',
            },
            {
                id: 'type-c',
                title: 'type-c',
            },
            {
                id: 'type-d',
                title: 'type-d',
            },
            {
                id: 'type-e',
                title: 'type-e',
            },
        ];
    },
    schema: z.object({
        title: z.string(),
    }),
});

const models = defineCollection({
    loader: file('src/data/models.json'),
    schema: z.object({
        title: z.string(),
    }),
});

export const collections = {
    docs: defineCollection({ schema: docsSchema() }),
    decisions,
    models,
};
