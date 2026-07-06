export type BreakpointName = 'm' | 'l';

export const GLOBAL_BP = {
	m: 640,
	l: 1200,
} as const;

export const GLOBAL_BP_NAMES = Object.keys(GLOBAL_BP) as (keyof typeof GLOBAL_BP)[];
