import { z } from 'astro:content';

export const DecisionTypeZod = z.object({
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
});

export const DecisionModelZod = z.object({
    decisionTypeId: z.string(),
    model: z.string(),
    name: z.string(),
    description: z.string().optional(),
});

export const DecisionZod = z.object({
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
});
