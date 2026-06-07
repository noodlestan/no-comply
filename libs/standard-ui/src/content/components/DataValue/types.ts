import type { ClassList } from '@no-comply/solid-primitives';
import type { JSX } from 'solid-js';

import type { ContentSize } from '../../../size';

export type DataValueLength = 's' | 'm' | 'l' | 'full' | 'auto';
export type DataValueAlign = 'left' | 'right';

export type DataValueProps = {
	id?: string;
	size?: ContentSize;
	length?: number | DataValueLength;
	align?: DataValueAlign;
	wrap?: boolean;
	onClick?: () => void;
	classList?: ClassList;
	value?: JSX.Element;
};
