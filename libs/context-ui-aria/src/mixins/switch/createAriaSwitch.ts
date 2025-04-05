import { createComputedProps } from '@noodlestan/context-ui-types';

import type { SwitchTagName } from '../../tag';
import { createAriaRegion } from '../region';

import type { AriaSwitchAPI, AriaSwitchProps } from './types';

export const createAriaSwitch = (props: AriaSwitchProps): AriaSwitchAPI => {
    const { elProps: regionProps, labelProps } = createAriaRegion(props, 'switch');

    const type = (tag: SwitchTagName = 'button'): 'button' | 'checkbox' | undefined => {
        if (tag === 'input') {
            return 'checkbox';
        }
        return tag === 'button' ? 'button' : undefined;
    };

    const elProps = createComputedProps(regionProps, {
        component: () => props.component,
        type: () => type(props.component),
        'aria-checked': () => props.checked,
        'aria-disabled': () => props.disabled,
        'data-disabled': () => (props.disabled ? '' : undefined),
    });

    return {
        elProps,
        labelProps,
    };
};
