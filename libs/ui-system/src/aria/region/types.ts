import type { Accessor } from 'solid-js';

import type { AccessorOrValue } from '../../private/solid/types';
import type { AriaLabelProps } from '../label';
import type { AriaAttributes, AriaRoleName } from '../types';

export type AriaRegionOptions = {
    role?: AriaRoleName;
    label?: AccessorOrValue<string>;
    labelledby?: AccessorOrValue<string>;
};

export type AriaRegionProps = Pick<AriaAttributes, 'role' | 'aria-label' | 'aria-labelledby'>;

export type AriaRegionAPI = {
    elProps: Accessor<AriaRegionProps>;
    labelProps: Accessor<AriaLabelProps>;
};
