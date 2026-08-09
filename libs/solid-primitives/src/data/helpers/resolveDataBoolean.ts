import type { DataAttributeBoolean } from '../types';

export const resolveDataBoolean = (value: boolean | undefined): DataAttributeBoolean => {
	return value ? '' : undefined;
};
