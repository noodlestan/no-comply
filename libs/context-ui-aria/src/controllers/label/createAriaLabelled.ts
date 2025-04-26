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

    const $root = createComputedProps({
        'aria-label': label,
        'aria-labelledby': labelledby,
        'aria-describedby': describedby,
    });

    const $label = createComputedProps({
        id: labelledby,
    });

    const $description = createComputedProps({
        id: describedby,
    });

    return {
        $root,
        $label,
        $description,
        hasLabel,
    };
};
