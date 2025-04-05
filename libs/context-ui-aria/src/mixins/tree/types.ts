import type { AriaLabelElementProps, AriaLabelledProps } from '../../label';
import type { AriaAttributes } from '../../types';
import type { AriaRegionElementProps } from '../region';

export type AriaTreeProps = AriaLabelledProps & {
    multiselectable?: boolean;
    orientation?: 'vertical' | 'horizontal';
};

export type AriaTreeElementProps = AriaRegionElementProps & {
    role: 'tree';
    'aria-orientation': AriaAttributes['aria-orientation'];
    'aria-multiselectable': AriaAttributes['aria-multiselectable'];
};

export interface AriaTreeAPI {
    elProps: AriaTreeElementProps;
    labelProps: AriaLabelElementProps;
}
