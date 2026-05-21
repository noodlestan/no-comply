import type { TypeRef, TypeRefObject } from '../types';

export function normalizeTypeRefObject(type: TypeRef): TypeRefObject {
	if (typeof type === 'string') {
		return { type };
	}
	return type;
}
