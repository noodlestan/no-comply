import type { Styles } from '@no-comply/solid-primitives';

export const getOpacityScale = (layer: string, value: number): Styles => {
	return { [`--o-surface-${layer}`]: String(value) };
};
