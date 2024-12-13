import { docsSchema } from '@astrojs/starlight/schema';
import { DecisionTypes } from '@noodlestan/designer-decisions';
import { defineCollection, z } from 'astro:content';

const decisionPages = DecisionTypes.map(decision => ({
    title: decision.name,
    id: decision.type,
    category: decision.category,
    domain: decision.domain,
    type: decision.type,
    name: decision.name,
    description: decision.description,
    models: decision.models,
}));

const decisionTypes = defineCollection({
    loader: async () => {
        return decisionPages;
    },
    schema: z.object({
        title: z.string(),
        category: z.string(),
        domain: z.string(),
        type: z.string(),
        name: z.string(),
        description: z.string(),
        models: z.array(
            z.object({
                model: z.string(),
                description: z.string(),
            }),
        ),
    }),
});

export const collections = {
    docs: defineCollection({ schema: docsSchema() }),
    decisionTypes,
};
