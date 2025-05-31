import {
    createModalDialog as createHeadnlessModalDialog,
    createModalDialogMixin,
} from '@no-comply/solid-composables';
import {
    type PickRequired,
    combineProps,
    computedProps,
    createClassList,
} from '@no-comply/solid-primitives';

import styles from './ModalDialog.module.scss';
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
    const classList = createClassList(styles, () => ['ModalDialog', `size-${size()}`]);
    const $root = computedProps({
        classList,
    });

    const localSurfaceProps = { variant: 'dialog' } as const;

    const surfaceProps = combineProps(localSurfaceProps, $root, $dialogRoot, $dialogMixinRoot);

    return {
        surfaceProps,
        $description,
        $label,
        context,
        contextValue,
    };
};
