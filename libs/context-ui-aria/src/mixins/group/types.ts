import type { AriaLabelElementProps, AriaLabelledProps } from '../../label';
import type { AriaAttributes } from '../../types';
import type { AriaRegionElementProps } from '../region';

export type AriaGroupProps = AriaLabelledProps & {
    expanded?: boolean;
    setSize?: number;
};

export type AriaGroupElementProps = AriaRegionElementProps<'group'> & {
    'aria-expanded': AriaAttributes['aria-expanded'];
    'aria-setsize': AriaAttributes['aria-setsize'];
};

export interface AriaGroupAPI {
    elProps: AriaGroupElementProps;
    labelProps: AriaLabelElementProps;
}
