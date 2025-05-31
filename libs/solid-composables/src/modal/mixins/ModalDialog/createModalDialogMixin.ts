import { computedProps, staticClassList } from '@no-comply/solid-primitives';

import styles from './ModalDialogMixin.module.scss';
import type { ModalDialogMixinAPI } from './types';

export function createModalDialogMixin(): ModalDialogMixinAPI {
    const $static = {
        classList: staticClassList(styles, 'ModalDialog'),
    };
    const $root = computedProps($static, {});

    return {
        $root,
    };
}
