import { $PROXY } from 'solid-js';

import type { AccessorOrValue, AnyProps } from '../../types';

import { $COMPUTED } from './constants';
import { getClassListProperty } from './getClassListProperty';
import { getHandlerProperty } from './getHandlerProperty';
import { getStyleProperty } from './getStyleProperty';
import { resolveSource } from './resolveSource';

export function getMergedProperty(
	sources: AccessorOrValue<AnyProps>[],
	key: string | symbol,
): unknown {
	if (key === $PROXY || key === $COMPUTED) {
		return true;
	}

	const k = key as string;

	for (let i = sources.length - 1; i >= 0; i--) {
		const resolved = resolveSource(sources[i]) as Record<string, unknown>;
		if (k in resolved) {
			if (k === 'classList') {
				return getClassListProperty(sources);
			}
			if (k === 'style') {
				return getStyleProperty(sources);
			}
			if (k === 'ref') {
				return getHandlerProperty(sources, k);
			}
			if (k.startsWith('on')) {
				return getHandlerProperty(sources, k);
			}
			return resolved[k];
		}
	}
	return undefined;
}
