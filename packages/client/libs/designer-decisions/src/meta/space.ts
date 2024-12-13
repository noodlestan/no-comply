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
                model: 'explicit',
                description: 'Defines a space value.',
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
                model: 'linear-range',
                description:
                    'Defines a space scale interpolating linearly between two space values.',
            },
            {
                model: 'explicit',
                description: 'Defines a space scale with arbitrary space values.',
            },
            {
                model: 'modifier',
                description:
                    'Defines a space scale by successively applying a modifier to the previous step.',
            },
        ],
    },
];
