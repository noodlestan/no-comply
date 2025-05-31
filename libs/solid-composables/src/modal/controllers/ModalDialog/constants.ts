import { ARIA_DIALOG_PROPS } from '@no-comply/solid-accessibility';
import { MODAL_CONTEXT_OPTIONS } from '@no-comply/solid-contexts';
import { definePropKeys } from '@no-comply/solid-primitives';

import { FOCUS_TRAP_PROPS } from '../../../focus';

import type { ModalDialogProps } from './types';

export const $MODAL_DIALOG = 'controller:composable:modal-dialog';

export const MODAL_DIALOG_PROPS = definePropKeys<ModalDialogProps>()([
    ...ARIA_DIALOG_PROPS,
    ...FOCUS_TRAP_PROPS,
    ...MODAL_CONTEXT_OPTIONS,
    'onDiscard',
]);
