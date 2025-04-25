import type { AriaAttributes } from '../../types';
import type { AriaLabelledAPI, AriaLabelledProps } from '../label';
import type { AriaRegionElementProps } from '../region';

export type AriaTreeProps = AriaLabelledProps & {
    multiselectable?: boolean;
    orientation?: 'vertical' | 'horizontal';
};

export interface AriaTreeAPI {
    elProps: AriaRegionElementProps & {
        role: 'tree';
        'aria-orientation': AriaAttributes['aria-orientation'];
        'aria-multiselectable': AriaAttributes['aria-multiselectable'];
    };
    labelProps: AriaLabelledAPI['labelProps'];
    descriptionProps: AriaLabelledAPI['descriptionProps'];
}
