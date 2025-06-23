import type { ClassList } from '../types';

import { mapClassName } from './mapClassName';

export const staticClassList = (
	styles: Record<string, string>,
	input: string | string[],
): ClassList => {
	if (typeof input === 'string') {
		return { [mapClassName(styles, input)]: true };
	}

	const res: ClassList = {};
	for (const item of input) {
		res[mapClassName(styles, item)] = true;
	}
	return res;
};
