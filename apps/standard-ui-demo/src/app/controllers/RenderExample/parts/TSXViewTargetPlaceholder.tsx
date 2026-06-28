/* eslint-disable dot-notation */
import {
	PLACEHOLDER_COMPONENT_PROP,
	PLACEHOLDER_KEY_PROP,
	PLACEHOLDER_PROPS_PROP,
} from '@purrtrait/view-tsx';
import type { JSX } from 'solid-js';
import { Dynamic } from 'solid-js/web';

import { STATIC_SCOPE } from '../constants';

export function TSXViewTargetPlaceholder(props: Record<string, unknown>): JSX.Element {
	const key = () => (props[PLACEHOLDER_KEY_PROP] || '') as string;
	const componentName = () => (props[PLACEHOLDER_COMPONENT_PROP] || '') as string;
	const allProps = () => (props[PLACEHOLDER_PROPS_PROP] || {}) as Record<string, unknown>;
	const ownProps = () => {
		const all = (allProps()[key()] || {}) as Record<string, () => unknown>;

		const targetsProps: Record<string, unknown> = {};
		for (const name in all) {
			if (name === 'children') {
				continue;
			}
			targetsProps[name] = all[name]?.();
		}
		return targetsProps;
	};

	const children = (): JSX.Element | undefined => {
		const all = (allProps()[key()] || {}) as Record<string, () => unknown>;

		if ('children' in all) {
			return all['children']?.() as JSX.Element | undefined;
		}
	};

	const Component = () => STATIC_SCOPE[componentName() as keyof typeof STATIC_SCOPE];

	return (
		<Dynamic component={Component()} {...ownProps()}>
			{children()}
		</Dynamic>
	);
}
