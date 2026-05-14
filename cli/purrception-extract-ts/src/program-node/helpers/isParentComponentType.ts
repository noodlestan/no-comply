import type { TypeRefObject } from '@purrception/types-ts';

export function isParentComponentType(type: TypeRefObject | undefined): boolean {
	return Boolean(type?.type === 'ParentComponent' && type?.member === undefined);
}
