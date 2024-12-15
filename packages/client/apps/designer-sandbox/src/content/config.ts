import { docsSchema } from '@astrojs/starlight/schema';
import { DecisionTypes } from '@noodlestan/designer-decisions';
import { defineCollection } from 'astro:content';

import data from '../../data/decisions/color.json';
import type { DecisionType, DecisionTypeModel } from '../collections/types';
import { DecisionModelZod, DecisionTypeZod, DecisionZod } from '../collections/zods';

const decisionTypesCollection = defineCollection({
    loader: async () => {
        return DecisionTypes.map(decision => ({
            id: decision.type,
            title: decision.name,
            ...decision,
        })) as DecisionType[];
    },
    schema: DecisionTypeZod,
});

const modelsCollection = defineCollection({
    loader: async () => {
        return DecisionTypes.reduce((acc, item) => {
            return [
                ...acc,
                ...item.models.map(model => ({
                    id: item.type + '/' + model.model,
                    decisionTypeId: item.type,
                    ...model,
                })),
            ];
        }, [] as DecisionTypeModel[]);
    },
    schema: DecisionModelZod,
});

const decisionsCollection = defineCollection({
    loader: async () => {
        const values = data.map(decision => ({
            id: decision.type,
            ...decision,
        }));
        return values;
    },
    schema: DecisionZod,
});

export const collections = {
    docs: defineCollection({ schema: docsSchema() }),
    decisionTypes: decisionTypesCollection,
    models: modelsCollection,
    decisions: decisionsCollection,
};
