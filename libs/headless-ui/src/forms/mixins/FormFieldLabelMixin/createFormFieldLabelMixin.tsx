import { createComputedProps, staticClassList } from '@noodlestan/context-ui-types';

import styles from './FormFieldLabelMixin.module.css';
import type { FormFieldLabelMixinApi, FormFieldLabelMixinProps } from './types';

export const createFormFieldLabelMixin = (
    props: FormFieldLabelMixinProps,
): FormFieldLabelMixinApi => {
    const iconStaticProps = {
        classList: staticClassList(styles, 'FormFieldLabel'),
    };
    const elProps = createComputedProps(iconStaticProps, {
        for: () => props.for,
    });

    return {
        elProps,
    };
};
