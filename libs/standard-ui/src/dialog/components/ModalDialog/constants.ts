import { definePropKeys } from '@noodlestan/context-ui-primitives';
import { MODAL_DIALOG_PROPS as HEADLESS_MODAL_DIALOG_PROPS } from '@noodlestan/headless-ui';

import type { ModalDialogProps } from './types';

export const MODAL_DIALOG_PROPS = definePropKeys<ModalDialogProps>()([
    ...HEADLESS_MODAL_DIALOG_PROPS,
    'size',
]);
