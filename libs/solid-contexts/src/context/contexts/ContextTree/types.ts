import type { ContextId, ContextNode } from '../../types';

export type ContextNodeOptions = {
	id?: ContextId;
};

export type ContextNodeOwnerAPI = {
	addChild: (child: ContextNode) => void;
	removeChild: (child: ContextNode) => void;
};

export type ContextNodeValue = [ContextNode, ContextNodeOwnerAPI];
