import { createComputedProps, staticClassList } from '@no-comply/solid-primitives';

import styles from './ModalDialogMixin.module.css';
import type { ModalDialogMixinAPI } from './types';

export function createModalDialogMixin(): ModalDialogMixinAPI {
    const $static = {
        classList: staticClassList(styles, 'ModalDialog'),
    };
    const $localRoot = createComputedProps($static, {});

    return {
        $root: $localRoot,
    };
}
