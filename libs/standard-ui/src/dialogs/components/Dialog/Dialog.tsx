/* eslint-disable jsx-a11y/no-autofocus */
import {
    type PickRequired,
    createClassList,
    createComputedProps,
    mergeProps,
} from '@noodlestan/context-ui-types';
import { type ParentComponent } from 'solid-js';

import { Surface } from '../../../surface';

import styles from './Dialog.module.css';
import type { DialogProps } from './types';

const defaultProps: PickRequired<DialogProps, 'size'> = {
    size: 'm',
};

export const Dialog: ParentComponent<DialogProps> = props => {
    const size = () => props.size ?? defaultProps.size;

    const classList = createClassList(styles, () => ['Dialog', `Dialog-size-${size()}`]);

    const localProps = createComputedProps({ classList });
    const surfaceProps = mergeProps(localProps, props.dialog.containerProps);

    return (
        <Surface variant="dialog" {...surfaceProps}>
            {props.children}
        </Surface>
    );
};
