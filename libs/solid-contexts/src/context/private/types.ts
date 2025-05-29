import type { RawDataAttributes, Styles } from '@no-comply/solid-primitives';

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
