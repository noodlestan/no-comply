import type { AttributeBoolean } from '../types';

export const resolveAttributeBoolean = (value: boolean | undefined): AttributeBoolean => {
	return value || undefined;
};
