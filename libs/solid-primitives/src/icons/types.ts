import type { JSX } from 'solid-js';

/**
 * @noresolve
 */
export type IconComponent = (props: object) => JSX.Element;

/**
 * @noresolve
 */
export type IconComponentValue = {
	component: IconComponent;
};

/**
 * @noresolve
 */
export type IconValue<A extends unknown[] = []> =
	| IconComponentValue
	| ((...args: A) => IconComponent);

/**
 * @noresolve
 */
export type IconMap = Record<string, IconValue>;
