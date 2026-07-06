import type { ContextId } from '../types';

export const createContextId = (name: string, parent?: ContextId): ContextId => {
	if (parent) {
		return { ctxId: parent.ctxId + '.' + name };
	}
	return { ctxId: name };
};
