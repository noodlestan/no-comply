import { ColorInput } from '../primitives/primitives';

import { DecisionInput } from './base';

export type ColorValueExplicitInput = DecisionInput & {
    type: 'color-value/explicit';
    params: {
        value: ColorInput;
    };
};

export type ColorScaleExplicitInput = DecisionInput & {
    type: 'color-scale/explicit';
    params: {
        values: ColorInput[];
    };
};

export type ColorDecisionInput = ColorScaleExplicitInput | ColorValueExplicitInput;
