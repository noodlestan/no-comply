import type { FormProps as HeadlessFormProps } from '@no-comply/solid-composables';
import type { ClassList } from '@no-comply/solid-primitives';

import type { ContentSize } from '../../../types';

export type FormProps = HeadlessFormProps & {
	size?: ContentSize;
	classList?: ClassList;
};
