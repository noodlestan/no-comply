import { definePropKeys } from '@noodlestan/context-ui-primitives';

import type { ModalContextOptions } from './types';

export const MODAL_CONTEXT_OPTIONS = definePropKeys<ModalContextOptions>()(['sticky']);
