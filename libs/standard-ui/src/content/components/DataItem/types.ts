import type { IconComponent } from '@no-comply/solid-contexts';
import type { ClassList } from '@no-comply/solid-primitives';
import type { JSX } from 'solid-js';

import type { ContentSize } from '../../../size';
import type { ContentLengthProp } from '../../mixins';

export type DataItemProps = {
	id?: string;
	size?: ContentSize;
	length?: ContentLengthProp;
	label?: string;
	units?: string;
	icon?: IconComponent;
	onClick?: () => void;
	classList?: ClassList;
	value?: JSX.Element;
};
