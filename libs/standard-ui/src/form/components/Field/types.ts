import type {
	FieldAPI as HeadlessFieldAPI,
	FieldProps as HeadlessFieldProps,
} from '@no-comply/solid-composables';
import type { ClassList } from '@no-comply/solid-primitives';

import type { ContentSize } from '../../../types';
import type { FieldLabelProps } from '../FieldLabel';

export type FieldProps = HeadlessFieldProps & {
	size?: ContentSize;
};

export type FieldAPI = Omit<HeadlessFieldAPI, '$root' | '$label'> & {
	$root: HeadlessFieldAPI['$root'] & {
		classList: ClassList;
	};
	_fieldLabel: HeadlessFieldAPI['$label'] & {
		size: FieldLabelProps['size'];
	};
};
