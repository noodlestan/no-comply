import { useContext } from 'solid-js';

import { ContextRootCTX } from '../../private';

import { createContextNodePrivate } from './private';
import type { ContextNodeOptions, ContextNodeValue } from './types';

export const createContextRoot = (options: ContextNodeOptions = {}): ContextNodeValue => {
	const maybeRooot = useContext(ContextRootCTX);
	if (maybeRooot) {
		throw new Error('createContextRoot() must not be wrapped in <ContextRootProvider/>');
	}

	return createContextNodePrivate(undefined, options);
};
