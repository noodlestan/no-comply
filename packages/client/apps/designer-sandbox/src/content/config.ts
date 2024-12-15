import { docsSchema } from '@astrojs/starlight/schema';
import { DecisionTypes } from '@noodlestan/designer-decisions';
import { defineCollection, z } from 'astro:content';

import data from '../../data/decisions/color.json';

const decisionTypes = defineCollection({
    loader: async () => {
        return DecisionTypes.map(decision => ({
            title: decision.name,
            id: decision.type,
            category: decision.category,
            domain: decision.domain,
            type: decision.type,
            name: decision.name,
            description: decision.description,
            models: decision.models,
        }));
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
                name: z.string(),
                description: z.string(),
            }),
        ),
    }),
});

type DecisionTypeModel = {
    id: string;
    decisionTypeId: string;
    model: string;
    name: string;
    description?: string;
};

const models = defineCollection({
    loader: async () => {
        const values = DecisionTypes.reduce((acc, item) => {
            return [
                ...acc,
                ...item.models.map(model => ({
                    id: item.type + '/' + model.model,
                    decisionTypeId: item.type,
                    model: model.model,
                    name: model.name,
                    description: model.description,
                })),
            ];
        }, [] as DecisionTypeModel[]);
        return values;
    },
    schema: z.object({
        decisionTypeId: z.string(),
        model: z.string(),
        name: z.string(),
        description: z.string().optional(),
    }),
});

const decisions = defineCollection({
    loader: async () => {
        const values = data.map(d => ({
            id: d.type,
            type: d.type,
            name: d.name,
            description: d.description,
            usage: d.usage,
            params: d.params,
        }));
        return values;
    },
    schema: z.object({
        type: z.string(),
        name: z.string(),
        description: z.string().optional(),
        usage: z
            .object({
                intendedFor: z.array(z.string()).optional(),
                notFor: z.array(z.string()).optional(),
            })
            .optional(),
        params: z.object({}),
    }),
});

export const collections = {
    docs: defineCollection({ schema: docsSchema() }),
    decisionTypes,
    models,
    decisions,
};
