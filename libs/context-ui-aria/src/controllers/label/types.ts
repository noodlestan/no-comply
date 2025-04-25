import type { Accessor } from 'solid-js';

export type AriaLabelledProps = {
    label?: string;
    labelled?: boolean;
    labelledby?: string;
    described?: boolean;
    describedby?: string;
};

export type AriaLabelledAPI = {
    elProps: {
        'aria-label'?: string;
        'aria-labelledby'?: string;
        'aria-describedby'?: string;
    };
    labelProps: {
        id?: string;
    };
    descriptionProps: {
        id?: string;
    };
    hasLabel: Accessor<boolean>;
};
