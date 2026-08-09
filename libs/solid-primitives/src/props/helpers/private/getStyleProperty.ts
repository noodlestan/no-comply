/* eslint-disable dot-notation */
import type { Styles } from '../../../styles';
import type { AccessorOrValue, AnyProps } from '../../types';

import { resolveSource } from './resolveSource';

export function getStyleProperty(sources: AccessorOrValue<AnyProps>[]): Styles {
	const styleFns: (() => Styles)[] = [];
	for (let i = 0; i < sources.length; i++) {
		const resolvedSource = resolveSource(sources[i]) as Record<string, unknown>;
		const styles = resolvedSource['style'] as AccessorOrValue<Styles>;
		if (styles) {
			styleFns.push(typeof styles === 'function' ? styles : () => styles);
		}
	}
	return styleFns.reduce((acc, fn) => ({ ...acc, ...fn() }), {});
}
