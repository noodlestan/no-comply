import type { AttributeString } from '../attributes';

export type DataAttributeName<T extends string = string> = `data-${T}`;

export type DataAttributes<T extends string = string> = {
	[key in DataAttributeName<T>]: AttributeString | undefined;
};

export type DataAttributeBoolean = '' | undefined;

export type RawDataAttributes<T extends string = string> = {
	[key in T]?: string | boolean | undefined;
};
