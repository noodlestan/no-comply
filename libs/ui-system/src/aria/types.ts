import type { JSX } from 'solid-js';

export type AriaAttributes = JSX.AriaAttributes & {
    tabIndex: number;
};

export type AriaRegionAttributes = Pick<
    AriaAttributes,
    'tabIndex' | 'role' | 'aria-label' | 'aria-labelledby'
>;

export type AriaRegionOptions = {
    label?: string;
    labelledby?: string;
};
