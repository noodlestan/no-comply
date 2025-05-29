import type { AccessorOrValue } from '../../types';

import { resolveSource } from './resolveSource';
import { type HandlerProp, type Props } from './types';

export function getHandlerProperty(
    sources: AccessorOrValue<Props>[],
    key: string,
): HandlerProp | undefined {
    const handlers: HandlerProp[] = [];

    for (let i = 0; i < sources.length; i++) {
        const resolvedSource = resolveSource(sources[i]);
        const handler = resolvedSource[key];
        if (typeof handler === 'function') {
            handlers.push(handler as HandlerProp);
        }
    }

    if (handlers.length === 0) {
        return undefined;
    }
    if (handlers.length === 1) {
        return handlers[0];
    }
    return (arg: unknown) => {
        handlers.forEach(handler => handler(arg));
    };
}
