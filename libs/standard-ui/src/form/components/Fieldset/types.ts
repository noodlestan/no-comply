import type { FlexDirection } from '@no-comply/solid-composables';
import type { ClassList } from '@no-comply/solid-primitives';

import type { ContentSize } from '../../../size';

export type FieldsetProps = {
	label: string;
	direction?: FlexDirection;
	wrap?: boolean;
	size?: ContentSize;
	classList?: ClassList;
};
