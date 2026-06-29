import type { DataAttributeBoolean } from '../types';

export const dataBoolean = (value: boolean | undefined): DataAttributeBoolean => {
	return value ? '' : undefined;
};
