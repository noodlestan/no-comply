import { createExposable, exposeAPI } from '@no-comply/solid-contexts';
import { staticClassList } from '@no-comply/solid-primitives';

import styles from './ModalDialogMixin.module.scss';
import { $MODAL_DIALOG_MIXIN } from './constants';
import type { ModalDialogMixinAPI } from './types';

export function createModalDialogMixin(): ModalDialogMixinAPI {
    const [, expose] = createExposable($MODAL_DIALOG_MIXIN);

    const $root = {
        classList: staticClassList(styles, 'ModalDialog'),
    };

    return exposeAPI(expose, '$root', {
        $root,
    });
}
