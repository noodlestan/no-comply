import type { BaseContext } from '@no-comply/solid-contexts';
import type { Accessor } from 'solid-js';

export type MenuContextOptions = {
	id?: string;
};

export type MenuContext = BaseContext & {
	type: 'menu';
	id: Accessor<string>;
	dismissStack: () => void;
	setMenuRef: (el: HTMLElement) => void;
};

export type MenuContextValue = [MenuContext];
