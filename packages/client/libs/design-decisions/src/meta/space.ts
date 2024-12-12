import { createSpaceScaleDecision, createSpaceValueDecision } from '../decisions';
import { DecisionTypeMeta } from '../types';

export const SpaceDecisionTypes: DecisionTypeMeta[] = [
    {
        category: 'value',
        domain: 'space',
        type: 'space-value',
        name: 'Space Value Decision',
        description: 'A decision to define a space value.',
        factory: createSpaceValueDecision,
        models: [
            {
                model: 'static-value',
                description: 'Defines a static space value.',
            },
        ],
    },
    {
        category: 'scale',
        domain: 'space',
        type: 'space-scale',
        name: 'Space Scale Decision',
        description: 'A decision to define a space scale.',
        factory: createSpaceScaleDecision,
        models: [
            {
                model: 'linear-stepped-range',
                description:
                    'Defines a linear scale interpolating a number of steps between two space values.',
            },
            {
                model: 'static-value',
                description: 'Defines a static space scale with multiple distance values.',
            },
            {
                model: 'stepped-modifier',
                description:
                    'Defines a space scale by successively applying a modifier to previous step.',
            },
        ],
    },
];
