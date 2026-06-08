export type MediaQueryUnit = 'px' | 'em' | 'rem' | '%';

export type MediaQueryCriteria = {
	minWidth?: number | [number, MediaQueryUnit];
	maxWidth?: number | [number, MediaQueryUnit];
	minHeight?: number | [number, MediaQueryUnit];
	maxHeight?: number | [number, MediaQueryUnit];
};
