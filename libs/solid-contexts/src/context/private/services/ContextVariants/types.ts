import { type Accessor } from 'solid-js';

export type ContextVariant = {
	type: string;
	name: string;
	extend: string[];
};

export type ContextVariantsServiceAPI = {
	resolveVariant: <T extends ContextVariant>(type: string, name: string) => T[];
	registerVariants: (values: Accessor<ContextVariant[]>) => void;
	unregisterVariants: (values: Accessor<ContextVariant[]>) => void;
};
