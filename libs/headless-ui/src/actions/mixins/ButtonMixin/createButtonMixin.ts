import { createComputedProps, staticClassList } from '@noodlestan/context-ui-primitives';

import styles from './ButtonMixin.module.css';
import type { ButtonMixinAPI, ButtonMixinProps } from './types';

export const createButtonMixin = (props: ButtonMixinProps): ButtonMixinAPI => {
    const staticProps = {
        onFocus: (ev: FocusEvent) => props.onFocus?.(ev),
        onBlur: (ev: FocusEvent) => props.onBlur?.(ev),
        classList: staticClassList(styles, 'Button'),
    };

    const component = () => {
        if (props.component !== undefined && props.component !== 'auto') {
            return props.component;
        }
        return props.href ? 'a' : 'button';
    };

    const elProps = createComputedProps(staticProps, {
        component,
    });

    return {
        elProps,
    };
};
