import { definePropKeys } from '@no-comply/solid-primitives';

import type { ModalContextOptions } from './types';

export const MODAL_CONTEXT_OPTIONS = definePropKeys<ModalContextOptions>()(['sticky']);
