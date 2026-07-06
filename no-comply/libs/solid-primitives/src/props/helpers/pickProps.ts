import { splitProps } from 'solid-js';

export function pickProps<T extends Record<string, unknown>, K extends (keyof T)[]>(
	props: T,
	keys: K,
): Pick<T, K[number]> {
	return splitProps(props, keys)[0];
}
