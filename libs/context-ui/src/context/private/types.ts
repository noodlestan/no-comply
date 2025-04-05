import type { Accessor } from 'solid-js';

export type ContextId = {
    ctxId: string;
};

export type ContextValue = {
    type: string;
    name: string;
    extend: string[];
};

export type ContextValuesServiceAPI = {
    resolveValue: <T extends ContextValue>(type: string, name: string) => T[];
    registerValues: (values: Accessor<ContextValue[]>) => void;
    unregisterValues: (values: Accessor<ContextValue[]>) => void;
};

export type BaseContext = {
    type: string;
    value?: string;
    node?: ContextNode;
};

export type ContextNodeOptions = {
    id?: ContextId;
};

export type ContextNode = {
    id: string;
    parent: () => ContextNode | undefined;
    parentWith: <T extends BaseContext>(type: string) => [ContextNode, T] | [];
    values: <T extends BaseContext>(types?: string[]) => T[];
    valuesWith: <T>(guard: (context: unknown) => context is T) => (BaseContext & T)[];
    valueFor: <T extends BaseContext>(type: string) => T;
    maybeValueFor: <T extends BaseContext>(type: string) => T | undefined;
    children: Accessor<ContextNode[]>;
    childrenWith: <T extends BaseContext>(
        type: string,
        filter?: (child: ContextNode, context: T) => boolean,
    ) => [ContextNode, T][] | [];
    hasChildWith: <T extends BaseContext>(
        type: string,
        filter?: (child: ContextNode, context: T) => boolean,
    ) => boolean;
    firstChildWith: <T extends BaseContext>(
        type: string,
        filter?: (child: ContextNode, context: T) => boolean,
    ) => [ContextNode, T] | [];
};

export type ContextFactory<T extends BaseContext> = (api: ContextNode) => T;

export type ContextOwnerAPI = {
    node: ContextNode;
    createChildNode: (
        contexts: Accessor<ContextFactory<BaseContext>[]>,
        options?: ContextNodeOptions,
    ) => ContextOwnerAPI;
    removeChildNode: (child: ContextOwnerAPI) => void;
};
