import { createComputedProps, staticClassList } from '@noodlestan/context-ui-primitives';

import styles from './FieldMixin.module.css';
import type { FieldMixinApi } from './types';

export const createFieldMixin = (): FieldMixinApi => {
    const formFieldStaticProps = {
        classList: staticClassList(styles, 'Field'),
    };
    const elProps = createComputedProps(formFieldStaticProps, {});

    return {
        elProps,
    };
};
