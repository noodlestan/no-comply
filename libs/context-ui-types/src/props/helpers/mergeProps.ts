/* eslint-disable dot-notation */
import type { ClassList } from '../../classes';
import type { Styles } from '../../styles';
import type { AccessorOrValue } from '../types';

type Props = Record<string, unknown>;

const defineClassList = (target: Props, sources: AccessorOrValue<Props>[]) => {
    if ('classList' in target) {
        return;
    }

    const classLists: (() => ClassList)[] = [];

    Object.defineProperty(target, 'classList', {
        enumerable: true,
        get: () => {
            for (let i = 0; i < sources.length; i++) {
                const source = sources[i];
                const props = typeof source === 'function' ? source() : source;
                if (!props) continue;

                const classList = props['classList'];
                if (!classList) continue;

                if (typeof classList === 'function') {
                    classLists.push(classList as () => ClassList);
                } else {
                    classLists.push(() => classList as ClassList);
                }
            }
            return classLists.reduce((acc, fn) => ({ ...acc, ...fn() }), {});
        },
    });
};

const defineStyles = (target: Props, sources: AccessorOrValue<Props>[]) => {
    if ('style' in target) {
        return;
    }

    const styleFns: (() => Styles)[] = [];

    Object.defineProperty(target, 'style', {
        enumerable: true,
        get: () => {
            for (let i = 0; i < sources.length; i++) {
                const source = sources[i];
                const props = typeof source === 'function' ? source() : source;
                if (!props) continue;

                const styles = props['style'];
                if (!styles) continue;

                if (typeof styles === 'function') {
                    styleFns.push(styles as () => Styles);
                } else {
                    styleFns.push(() => styles as Styles);
                }
            }
            return styleFns.reduce((acc, fn) => ({ ...acc, ...fn() }), {});
        },
    });
};

const defineEventHandler = (target: Props, key: string, sources: AccessorOrValue<Props>[]) => {
    if (key in target) {
        return;
    }

    const handlers: ((ev: unknown) => void)[] = [];

    Object.defineProperty(target, key, {
        enumerable: true,
        get: () => {
            for (let i = 0; i < sources.length; i++) {
                const source = sources[i];
                const props = typeof source === 'function' ? source() : source;

                if (!props) {
                    continue;
                }

                const handler = props[key];
                if (!handler) {
                    continue;
                }

                if (typeof handler === 'function') {
                    handlers.push(handler as (ev: unknown) => void);
                }
            }

            if (handlers.length === 0) {
                return undefined;
            }

            if (handlers.length === 1) {
                return handlers[0];
            }

            return (ev: unknown) => {
                for (let i = 0; i < handlers.length; i++) {
                    handlers[i]?.(ev);
                }
            };
        },
    });
};

const defineProp = (target: Props, key: string, sources: AccessorOrValue<Props>[]) => {
    if (key in target) {
        return;
    }

    Object.defineProperty(target, key, {
        enumerable: true,
        get: () => {
            for (let i = sources.length - 1; i >= 0; i--) {
                const source = sources[i];
                const props = typeof source === 'function' ? source() : source;
                if (props && key in props) {
                    return props[key];
                }
            }
        },
    });
};

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
    const target: Props = {};

    for (let i = 0; i < sources.length; i++) {
        const source = sources[i];
        const props = typeof source === 'function' ? source() : source;
        if (!props) {
            continue;
        }

        const descriptors = Object.getOwnPropertyDescriptors(props);
        for (const key in descriptors) {
            if (key === 'classList') {
                defineClassList(target, sources);
            } else if (key === 'style') {
                defineStyles(target, sources);
            } else if (key.startsWith('on')) {
                defineEventHandler(target, key, sources);
            } else {
                defineProp(target, key, sources);
            }
        }
    }

    return target;
}
