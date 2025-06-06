export type ExposedAPI<T extends Record<string, unknown> = Record<string, unknown>> = T & {
	_id?: string;
};

export type ExposedDataProps = {
	'data-xp'?: string;
	'data-xp-id'?: string;
	'data-xp-parent'?: string;
};
