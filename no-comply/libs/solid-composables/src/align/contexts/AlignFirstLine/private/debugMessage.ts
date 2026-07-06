import type { ClassList } from '@no-comply/solid-primitives';

export const debugMessage = (type: 'target' | 'measure', classList: ClassList): string => {
	return `AlignFirstLine: ${type} ignored because already registered by "${Object.keys(classList).join(', ')}"`;
};
