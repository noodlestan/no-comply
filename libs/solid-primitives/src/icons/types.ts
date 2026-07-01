import type { JSX } from 'solid-js';

export type IconComponent = (props: object) => JSX.Element;

export type IconComponentValue = {
	component: IconComponent;
};

export type IconValue<A extends unknown[] = []> =
	| IconComponentValue
	| ((...args: A) => IconComponent);

export type IconMap = Record<string, IconValue>;
