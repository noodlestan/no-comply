import type {
	FieldLabelMixinAPI,
	FieldLabelAPI as HeadlessFieldLabelAPI,
	FieldLabelProps as HeadlessFieldLabelProps,
} from '@no-comply/solid-composables';
import type { ClassList } from '@no-comply/solid-primitives';

import type { ContentSize } from '../../../types';

export type FieldLabelProps = HeadlessFieldLabelProps & {
	size?: ContentSize;
};

export type FieldLabelAPI = {
	$root: HeadlessFieldLabelAPI['$root'] &
		FieldLabelMixinAPI['$root'] & {
			classList: ClassList;
		};
};
