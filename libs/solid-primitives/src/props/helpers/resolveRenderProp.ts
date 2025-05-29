import type { JSX } from 'solid-js';

import type { MaybeRenderProp } from '../types';

export function resolveRenderProp<T>(child: MaybeRenderProp<T>, props: T): JSX.Element {
    return typeof child === 'function' ? child(props) : child;
}
