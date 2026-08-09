import type { RawDataAttributes, Styles } from '@no-comply/solid-primitives';
import type { Accessor } from 'solid-js';

export type ContextNode = {
	id: string;
	value: BaseContext | undefined;
	parent: ContextNode | undefined;
	children: Accessor<ContextNode[]>;
};

export type ContextId = {
	ctxId: string;
};

export type BaseContext = {
	type: string;
};

export type ContextVarsAPI = {
	contextVars: () => Styles;
};

export type ContextDataAPI<T extends string = string> = {
	contextData: () => RawDataAttributes<T>;
};

export type ContextVariant = {
	type: string;
	name: string;
	extend: string[];
};
