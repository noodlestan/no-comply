import { createComputedProps, staticClassList } from '@noodlestan/context-ui-types';

import styles from './FormFieldMixin.module.css';
import type { FormFieldMixinApi } from './types';

export const createFormFieldMixin = (): FormFieldMixinApi => {
    const formFieldStaticProps = {
        classList: staticClassList(styles, 'FormField'),
    };
    const elProps = createComputedProps(formFieldStaticProps, {});

    return {
        elProps,
    };
};
