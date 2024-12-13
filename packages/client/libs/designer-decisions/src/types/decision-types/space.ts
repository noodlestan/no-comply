import { SpaceInput } from '../primitives/primitives';

import { DecisionInput } from './base';

export type SpaceValueExplicitInput = DecisionInput & {
    type: 'space-value/explicit';
    params: {
        value: SpaceInput;
    };
};

export type SpaceScaleExplicitInput = DecisionInput & {
    type: 'space-scale/explicit';
    params: {
        values: SpaceInput[];
    };
};

export type SpaceDecisionInput = SpaceScaleExplicitInput | SpaceValueExplicitInput;
