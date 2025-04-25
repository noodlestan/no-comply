import { createComputedProps, shortId } from '@noodlestan/context-ui-primitives';

import type { AriaLabelledAPI, AriaLabelledProps } from './types';

export const createAriaLabelled = (props: AriaLabelledProps = {}): AriaLabelledAPI => {
    const label = () => {
        if (props.label) {
            return props.label;
        }
    };

    const labelledby = () => {
        if (props.label) {
            return;
        }
        if (props.labelledby) {
            return props.labelledby;
        }
        if (props.labelled) {
            return shortId();
        }
    };

    const describedby = () => {
        if (props.describedby) {
            return props.describedby;
        }
        if (props.described) {
            return shortId();
        }
    };

    const hasLabel = () => Boolean(label() || labelledby());

    const elProps = createComputedProps({
        'aria-label': label,
        'aria-labelledby': labelledby,
        'aria-describedby': describedby,
    });

    const labelProps = createComputedProps({
        id: labelledby,
    });

    const descriptionProps = createComputedProps({
        id: describedby,
    });

    return {
        elProps,
        labelProps,
        descriptionProps,
        hasLabel,
    };
};
