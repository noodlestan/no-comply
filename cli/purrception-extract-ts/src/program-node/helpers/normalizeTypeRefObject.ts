import type { TypeRef, TypeRefObject } from '@purrception/types-ts';

export function normalizeTypeRefObject(type: TypeRef): TypeRefObject {
	if (typeof type === 'string') {
		return { type };
	}
	return type;
}
