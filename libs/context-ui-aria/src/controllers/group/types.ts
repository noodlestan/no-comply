import type { AriaAttributes } from '../../types';
import type { AriaLabelledAPI, AriaLabelledProps } from '../label';
import type { AriaRegionElementProps } from '../region';

export type AriaGroupProps = AriaLabelledProps & {
    expanded?: boolean;
    setSize?: number;
};

export interface AriaGroupAPI {
    elProps: AriaRegionElementProps<'group'> & {
        'aria-expanded': AriaAttributes['aria-expanded'];
        'aria-setsize': AriaAttributes['aria-setsize'];
    };
    labelProps: AriaLabelledAPI['labelProps'];
    descriptionProps: AriaLabelledAPI['descriptionProps'];
}
