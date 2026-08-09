import type { ClassList } from '@no-comply/solid-primitives';
import type { Accessor, JSX } from 'solid-js';

import type { ContentSize } from '../../../size';

export type ListInputBoxProps = {
	items: Accessor<string[]>;
	value?: Accessor<string | undefined>;
	onValueChange: (key: string) => void;
	children: (props: { key: string }) => JSX.Element;
	selectedItem?: (props: { key: string }) => JSX.Element;
	size?: ContentSize;
	disabled?: boolean;
	invalid?: boolean;
	onShow?: () => void;
	onHide?: () => void;
	classList?: ClassList;
};

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export type ListInputBoxAPI = {
	// Exposed for future imperative access if needed
};
