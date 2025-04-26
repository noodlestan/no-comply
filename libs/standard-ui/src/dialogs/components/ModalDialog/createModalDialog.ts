import {
    type PickRequired,
    createClassList,
    createComputedProps,
    mergeProps,
} from '@noodlestan/context-ui-primitives';
import {
    createModalDialog as createHeadnlessModalDialog,
    createModalDialogMixin,
} from '@noodlestan/headless-ui';

import styles from './ModalDialog.module.css';
import type { ModalDialogAPI, ModalDialogProps } from './types';

const defaultProps: PickRequired<ModalDialogProps, 'size'> = {
    size: 'm',
};

export const createModalDialog = (props: ModalDialogProps): ModalDialogAPI => {
    const {
        $root: $dialogRoot,
        $description,
        $label,
        context,
        contextValue,
    } = createHeadnlessModalDialog(props);
    const { $root: $dialogMixinRoot } = createModalDialogMixin();

    const size = () => props.size ?? defaultProps.size;
    const classList = createClassList(styles, () => ['ModalDialog', `ModalDialog-size-${size()}`]);
    const $localRoot = createComputedProps({
        classList,
    });

    const localSurfaceProps = { variant: 'dialog' } as const;

    const surfaceProps = mergeProps(localSurfaceProps, $localRoot, $dialogRoot, $dialogMixinRoot);

    return {
        surfaceProps,
        $description,
        $label,
        context,
        contextValue,
    };
};
