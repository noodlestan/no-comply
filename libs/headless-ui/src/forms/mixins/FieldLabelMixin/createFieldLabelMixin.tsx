import { createComputedProps, staticClassList } from '@noodlestan/context-ui-primitives';

import styles from './FieldLabelMixin.module.css';
import type { FieldLabelMixinProps, FormFieldLabelMixinApi } from './types';

export const createFieldLabelMixin = (props: FieldLabelMixinProps): FormFieldLabelMixinApi => {
    const labelStaticProps = {
        classList: staticClassList(styles, 'FieldLabel'),
    };
    const elProps = createComputedProps(labelStaticProps, {
        for: () => props.for,
    });

    return {
        elProps,
    };
};
