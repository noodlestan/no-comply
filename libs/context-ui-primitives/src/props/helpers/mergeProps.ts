/**
 * Based on [SolidJS](https://github.com/solidjs/solid)
 * Copyright (c) 2016-2025 Ryan Carniato
 * Licensed under the MIT License.
 * Modifications: Deep merging of classList, style, ref, and event handlers.
 */
import type { AccessorOrValue } from '../types';

import { getMergedProperty, resolveSource } from './private';
import type { Props } from './private';

export function mergeProps<T extends Props = Props, U extends Props = Props>(
    source1: AccessorOrValue<T>,
    source2: AccessorOrValue<U>,
): T & U;
export function mergeProps<
    T extends Props = Props,
    U extends Props = Props,
    V extends Props = Props,
>(source1: AccessorOrValue<T>, source2: AccessorOrValue<U>, source3: AccessorOrValue<V>): T & U & V;
export function mergeProps<
    T extends Props = Props,
    U extends Props = Props,
    V extends Props = Props,
    W extends Props = Props,
>(
    source1: AccessorOrValue<T>,
    source2: AccessorOrValue<U>,
    source3: AccessorOrValue<V>,
    source4: AccessorOrValue<W>,
): T & U & V & W;
export function mergeProps(...sources: AccessorOrValue<Props>[]): Props {
    const traps = {
        get(_: unknown, key: string) {
            if (key === '$PROXY') {
                return _;
            }
            return getMergedProperty(sources, key);
        },
        has(_: unknown, key: string) {
            for (let i = sources.length - 1; i >= 0; i--) {
                const resolved = resolveSource(sources[i]);
                if (key in resolved) {
                    return true;
                }
            }
            return false;
        },
        ownKeys() {
            const keys: (string | symbol)[] = [];
            for (let i = 0; i < sources.length; i++) {
                const resolved = resolveSource(sources[i]);
                if (resolved) {
                    keys.push(...Reflect.ownKeys(resolved));
                }
            }
            return Array.from(new Set(keys));
        },
        getOwnPropertyDescriptor(_: unknown, key: string) {
            return {
                configurable: true,
                enumerable: true,
                get() {
                    return getMergedProperty(sources, key as string);
                },
            };
        },
    };

    return new Proxy({}, traps) as Props;
}
