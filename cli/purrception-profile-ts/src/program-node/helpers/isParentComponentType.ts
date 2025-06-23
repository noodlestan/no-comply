import type { TypeRefObject } from '../../types';

export function isParentComponentType(type: TypeRefObject | undefined): boolean {
	return Boolean(type?.type === 'ParentComponent' && type?.member === undefined);
}
