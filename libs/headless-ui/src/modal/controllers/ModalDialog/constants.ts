import { MODAL_CONTEXT_OPTIONS } from '@noodlestan/context-ui';
import { ARIA_DIALOG_PROPS } from '@noodlestan/context-ui-aria';
import { definePropKeys } from '@noodlestan/context-ui-primitives';

import { FOCUS_TRAP_PROPS } from '../../../focus';

import type { ModalDialogProps } from './types';

export const MODAL_DIALOG_PROPS = definePropKeys<ModalDialogProps>()([
    ...ARIA_DIALOG_PROPS,
    ...FOCUS_TRAP_PROPS,
    ...MODAL_CONTEXT_OPTIONS,
    'onDiscard',
]);
