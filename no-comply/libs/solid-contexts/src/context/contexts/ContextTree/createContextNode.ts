import { onCleanup, useContext } from 'solid-js';

import { ContextNodeCTX } from '../../private';
import type { BaseContext } from '../../types';

import { createContextNodePrivate } from './private';
import type { ContextNodeOptions, ContextNodeValue } from './types';

export const createContextNode = (
	context: BaseContext,
	options: ContextNodeOptions = {},
): ContextNodeValue => {
	const [parent, ownerAPI] = useContext(ContextNodeCTX) || [];

	if (!parent || !ownerAPI) {
		throw new Error('createContextNode() must be wrapped in <ContextRootProvider/>');
	}

	const [node, nodeOwnerAPI] = createContextNodePrivate(context, options, parent);
	ownerAPI.addChild(node);

	onCleanup(() => {
		ownerAPI?.removeChild(node);
	});

	return [node, nodeOwnerAPI];
};
