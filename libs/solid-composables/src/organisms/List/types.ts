import type { ObjectWithId } from '@no-comply/solid-primitives';
import type { Component } from 'solid-js';

import type { ListItemProps } from './controllers';

export type ListItemContentsProps = {
	item: ObjectWithId;
	selected: boolean;
	onClick: (ev: Event) => void;
	onShiftClick: (ev: Event) => void;
	onAltClick: (ev: Event) => void;
};

export type ListComponents = {
	item: Component<ListItemProps>;
	itemContents: Component<ListItemContentsProps>;
};
