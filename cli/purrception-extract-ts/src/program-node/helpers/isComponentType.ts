import type { TypeRefObject } from '@purrception/types-ts';

export function isComponentType(type: TypeRefObject | undefined): boolean {
	return Boolean(type?.type === 'Component' && type?.member === undefined);
}
