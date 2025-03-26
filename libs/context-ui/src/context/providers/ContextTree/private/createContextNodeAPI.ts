import { type Accessor, createSignal } from 'solid-js';

import type {
    BaseContext,
    ContextFactory,
    ContextNode,
    ContextNodeOptions,
    ContextOwnerAPI,
} from '../../../private';

export const createContextNodeAPI = (
    contexts: Accessor<ContextFactory<BaseContext>[]>,
    parent?: ContextNode,
    options: ContextNodeOptions = {},
): ContextOwnerAPI => {
    const [children, setChildren] = createSignal<ContextOwnerAPI[]>([]);

    const node: { api: ContextNode } = {
        api: {} as ContextNode,
    };

    const ctx = () => contexts().map(f => f(node.api));

    const matchContext = <T extends BaseContext>(
        child: ContextNode,
        type: string,
        filter?: (child: ContextNode, context: T) => boolean,
    ): [ContextNode, T] | undefined => {
        const value = child.maybeValueFor<T>(type);
        if (value) {
            if (!filter || filter(child, value)) {
                return [child, value];
            }
        }
    };

    const childrenWith = <T extends BaseContext>(
        type: string,
        filter?: (child: ContextNode, context: T) => boolean,
    ): [ContextNode, T][] => {
        return children().flatMap(child => {
            const match = matchContext(child.node, type, filter);
            const children = child.node.childrenWith<T>(type, filter);
            return match ? [match, ...children] : children;
        });
    };

    const firstChildWith = <T extends BaseContext>(
        type: string,
        filter?: (child: ContextNode, context: T) => boolean,
    ): [ContextNode, T] | [] => {
        for (const child of children()) {
            const match = matchContext(child.node, type, filter);
            if (match) {
                return match;
            }
            const firstChild = child.node.firstChildWith<T>(type, filter);
            if (firstChild.length) {
                return firstChild;
            }
        }
        return [];
    };

    const parentWith = <T extends BaseContext>(type: string): [ContextNode, T] | [] => {
        const value = parent?.maybeValueFor<T>(type);
        if (parent && value) {
            return [parent, value as T];
        }
        return parent?.parentWith<T>(type) || [];
    };

    const filteredValues = <T extends BaseContext>(types?: string[]): T[] => {
        return ctx().filter(context => !types || types?.includes(context.type)) as T[];
    };

    const valuesWith = <T>(guard: (context: unknown) => context is T): (BaseContext & T)[] => {
        return ctx().filter(guard) as (BaseContext & T)[];
    };

    const maybeValueFor = <T extends BaseContext>(type: string): T | undefined => {
        return ctx().find(context => context.type === type) as T | undefined;
    };

    const valueFor = <T extends BaseContext>(type: string): T => {
        const value = maybeValueFor<T>(type);
        if (value) {
            return value;
        }
        const inheritedValue = parent?.maybeValueFor<T>(type);
        if (!inheritedValue) {
            throw new Error(`Context "${options.id?.ctxId}" does not have value for "${type}".`);
        }
        return inheritedValue;
    };

    node.api = {
        id: options.id?.ctxId || '<none>',
        parent: () => parent,
        parentWith,
        values: filteredValues,
        valuesWith,
        valueFor,
        maybeValueFor,
        children: () => children().map(child => child.node),
        childrenWith,
        firstChildWith,
    };

    const createChildNode = (
        contexts: Accessor<ContextFactory<BaseContext>[]>,
        options: ContextNodeOptions = {},
    ) => {
        const child = createContextNodeAPI(contexts, node.api, options);
        setChildren(prev => [...prev, child]);
        return child;
    };

    const removeChildNode = (child: ContextOwnerAPI) => {
        setChildren(prev => prev.filter(c => c !== child));
    };

    const api: ContextOwnerAPI = {
        node: node.api,
        createChildNode,
        removeChildNode,
    };

    return api;
};
