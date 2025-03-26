import type { Accessor } from 'solid-js';

import type { AccessorOrValue } from '../../private';
import type { AriaLabelProps } from '../label';
import type { AriaRegionOptions, AriaRegionProps } from '../region';
import type { AriaAttributes } from '../types';

export type AriaGroupOptions = Pick<AriaRegionOptions, 'label' | 'labelledby'> & {
    expanded?: AccessorOrValue<boolean>;
    setSize?: AccessorOrValue<number>;
};

export type AriaGroupProps = AriaRegionProps &
    Pick<AriaAttributes, 'aria-expanded' | 'aria-setsize'> & {
        role: 'group';
    };

export interface AriaGroupAPI {
    elProps: Accessor<AriaGroupProps>;
    labelProps: Accessor<AriaLabelProps>;
}
