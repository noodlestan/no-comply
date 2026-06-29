import type { AttributeBoolean } from '../types';

export const attributeBoolean = (value: boolean | undefined): AttributeBoolean => {
	return value || undefined;
};
