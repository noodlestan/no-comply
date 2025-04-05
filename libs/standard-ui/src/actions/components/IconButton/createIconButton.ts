import { createClassList, createComputedProps, mergeProps } from '@noodlestan/context-ui-types';
import { createIconButtonMixin } from '@noodlestan/headless-ui';
import { splitProps } from 'solid-js';

import { createButton } from '../Button';

import styles from './IconButton.module.css';
import type { IconButtonAPI, IconButtonProps } from './types';

export const createIconButton = (props: IconButtonProps): IconButtonAPI => {
    const [locals, others] = splitProps(props, ['rounded']);

    const classList = createClassList(styles, () => ({
        IconButton: true,
        [`IconButton-is-rounded`]: Boolean(locals.rounded),
    }));

    const iconButtonProps = createComputedProps({ classList });

    const { elProps: buttonElProps } = createButton(others);
    const { elProps: buttonMixinElProps, iconProps } = createIconButtonMixin(others);

    return {
        elProps: mergeProps(buttonElProps, buttonMixinElProps, iconButtonProps),
        iconProps,
    };
};
