import { labelValue } from '@no-comply/solid-primitives';

import type { ToggleActionLabelsProp } from '../types';

export function resolveToggleActionLabel(labels: ToggleActionLabelsProp, value: boolean): string {
	if (typeof labels === 'object') {
		return labelValue(value ? labels.on : labels.off);
	}
	return labelValue(labels);
}
