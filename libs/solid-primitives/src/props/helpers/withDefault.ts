import { type Accessor, createMemo } from 'solid-js';

export function withDefault<T>(value: () => T | undefined, fallback: () => T): Accessor<T> {
	return createMemo(() => value() ?? fallback());
}
