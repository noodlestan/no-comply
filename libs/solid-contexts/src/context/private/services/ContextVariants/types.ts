import { type Accessor } from 'solid-js';

import type { ContextVariant } from '../../../types';

export type ContextVariantsServiceAPI = {
	resolveVariant: <T extends ContextVariant>(type: string, name: string) => T[];
	registerVariants: (values: Accessor<ContextVariant[]>) => void;
	unregisterVariants: (values: Accessor<ContextVariant[]>) => void;
};
