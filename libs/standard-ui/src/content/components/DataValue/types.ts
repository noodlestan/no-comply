import type { ClassList } from '@no-comply/solid-primitives';
import type { JSX } from 'solid-js';

import type { ContentSize } from '../../../size';
import type { ContentLengthProp } from '../../mixins';

export type DataValueAlign = 'left' | 'right';

export type DataValueProps = {
	id?: string;
	size?: ContentSize;
	length?: ContentLengthProp;
	align?: DataValueAlign;
	wrap?: boolean;
	onClick?: () => void;
	classList?: ClassList;
	value?: JSX.Element;
};
