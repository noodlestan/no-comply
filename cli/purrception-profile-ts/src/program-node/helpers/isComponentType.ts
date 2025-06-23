import type { TypeRefObject } from '../../types';

export function isComponentType(type: TypeRefObject | undefined): boolean {
	return Boolean(type?.type === 'Component' && type?.member === undefined);
}
