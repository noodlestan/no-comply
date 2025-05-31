import { MODAL_DIALOG_PROPS as HEADLESS_MODAL_DIALOG_PROPS } from '@no-comply/solid-composables';
import { definePropKeys } from '@no-comply/solid-primitives';

import type { ModalDialogProps } from './types';

export const $MODAL_DIALOG = 'component:standard:modal-dialog';

export const MODAL_DIALOG_PROPS = definePropKeys<ModalDialogProps>()([
    ...HEADLESS_MODAL_DIALOG_PROPS,
    'size',
]);
