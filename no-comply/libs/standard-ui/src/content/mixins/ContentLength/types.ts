import type { ClassList, Styles } from '@no-comply/solid-primitives';
import type { Accessor } from 'solid-js';

export type ContentLength = 'short' | 'medium' | 'long' | 'full';

export type ContentLengthProp = number | string | ContentLength;

export type ContentLengthMixinProps = {
	length?: ContentLengthProp;
};

export type ContentLengthMixinAPI = {
	$root: {
		classList: ClassList;
		style: Styles;
	};
	length: Accessor<ContentLengthProp>;
};
