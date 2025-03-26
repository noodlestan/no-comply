import type { Accessor } from 'solid-js';

import type { AccessorOrValue } from '../../private/solid/types';
import type { AriaLabelProps } from '../label';
import type { AriaRegionOptions, AriaRegionProps } from '../region';
import type { AriaAttributes } from '../types';

export type AriaTreeOptions = Pick<AriaRegionOptions, 'label' | 'labelledby'> & {
    multiselectable?: AccessorOrValue<boolean>;
    orientation?: AccessorOrValue<'vertical' | 'horizontal'>;
};

export type AriaTreeProps = AriaRegionProps &
    Pick<AriaAttributes, 'aria-orientation' | 'aria-multiselectable'> & {
        role: 'tree';
    };

export interface AriaTreeAPI {
    elProps: Accessor<AriaTreeProps>;
    labelProps: Accessor<AriaLabelProps>;
}
