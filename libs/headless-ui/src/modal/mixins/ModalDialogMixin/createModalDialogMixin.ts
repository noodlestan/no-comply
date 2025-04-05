import { createComputedProps, staticClassList } from '@noodlestan/context-ui-types';
import { createSignal } from 'solid-js';

import styles from './ModalDialogMixin.module.css';
import type { ModalDialogMixinAPI, ModalDialogMixinProps } from './types';

export function createModalDialogMixin(props: ModalDialogMixinProps): ModalDialogMixinAPI {
    let resolvePromise: () => void;
    const [isClosed, setIsClosed] = createSignal(false);

    const handleAnimationEnd = () => {
        if (isClosed()) {
            resolvePromise();
        }
    };

    const close = async () => {
        setIsClosed(true);
        return new Promise<void>(resolve => (resolvePromise = resolve));
    };

    const tabIndex = () => (props.focusable ? 0 : undefined);

    const stopPropagation = (ev: Event) => ev.stopImmediatePropagation();

    const handleKeyDown = (ev: KeyboardEvent) => {
        ev.stopImmediatePropagation();
        if (ev.code === 'Escape') {
            close();
        }
    };

    const staticProps = {
        onKeyDown: handleKeyDown,
        onKeyUp: stopPropagation,
        onKeyPress: stopPropagation,
        onAnimationEnd: handleAnimationEnd,
        classList: staticClassList(styles, 'ModalDialogMixin'),
    };

    const elProps = createComputedProps(staticProps, {
        tabIndex,
        'data-modal-dialog-is-active': () => (props.active ? '' : undefined),
        'data-modal-dialog-focusable': () => (props.focusable ? '' : undefined),
    });

    return {
        elProps,
        closeDialog: close,
    };
}
