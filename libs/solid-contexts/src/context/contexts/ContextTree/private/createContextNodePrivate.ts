import { shortId } from '@no-comply/solid-primitives';
import { createSignal } from 'solid-js';

import type { BaseContext, ContextNode } from '../../../types';
import type { ContextNodeOptions, ContextNodeValue } from '../types';

export const createContextNodePrivate = (
	context?: BaseContext,
	options: ContextNodeOptions = {},
	parent?: ContextNode,
): ContextNodeValue => {
	const [children, setChildren] = createSignal<ContextNode[]>([]);

	const node = {
		id: options.id?.ctxId ?? shortId(),
		value: context,
		parent,
		children,
	};

	const addChild = (child: ContextNode) => {
		setChildren(prev => [...prev, child]);
	};

	const removeChild = (child: ContextNode) => {
		setChildren(prev => prev.filter(context => context !== child));
	};

	const ownerAPI = {
		addChild,
		removeChild,
	};

	return [node, ownerAPI];
};
