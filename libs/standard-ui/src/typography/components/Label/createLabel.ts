import type { LabelTagName } from '@noodlestan/context-ui-aria';
import {
    type PickRequired,
    createClassList,
    createComputedProps,
    mergeProps,
} from '@noodlestan/context-ui-types';
import { createTextMixin } from '@noodlestan/headless-ui';
import { splitProps } from 'solid-js';

import styles from './Label.module.css';
import type { LabelAPI, LabelProps } from './types';

const defaultProps: PickRequired<LabelProps, 'variant'> = {
    variant: 'default',
};

export const createLabel = (props: LabelProps): LabelAPI => {
    const [locals, others] = splitProps(props, ['variant']);

    const variant = () => locals.variant ?? defaultProps.variant;
    const classList = createClassList(styles, () => [`Label-variant-${variant()}`]);

    const labelStaticProps = {
        component: 'label' as LabelTagName,
    };
    const labelProps = createComputedProps(labelStaticProps, { classList });

    const { elProps: textMixinElProps } = createTextMixin(others);
    return {
        elProps: mergeProps(textMixinElProps, labelProps),
    };
};
