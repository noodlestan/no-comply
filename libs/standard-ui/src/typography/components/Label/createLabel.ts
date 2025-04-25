import {
    type PickRequired,
    createClassList,
    createComputedProps,
    mergeProps,
} from '@noodlestan/context-ui-primitives';
import { createTextMixin } from '@noodlestan/headless-ui';
import { splitProps } from 'solid-js';

import styles from './Label.module.css';
import type { LabelAPI, LabelProps } from './types';

const defaultProps: PickRequired<LabelProps, 'variant'> = {
    variant: 'normal',
};

export const createLabel = (props: LabelProps): LabelAPI => {
    const [locals, others] = splitProps(props, ['variant']);

    const variant = () => locals.variant ?? defaultProps.variant;
    const classList = createClassList(styles, () => [`Label-variant-${variant()}`]);

    const labelStaticProps = {
        component: 'label' as const,
    };
    const labelProps = createComputedProps(labelStaticProps, { classList });

    const { elProps: textMixinElProps } = createTextMixin(others);
    return {
        elProps: mergeProps(textMixinElProps, labelProps),
    };
};
