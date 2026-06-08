import type { ClassList, ObjectWithId, RenderProp } from '@no-comply/solid-primitives';

import type {
	OverflowItemsContext,
	OverflowItemsContextOptions,
	OverflowItemsContextValue,
} from '../../private';

type OverflowItemsOverflowProps = {
	items: ObjectWithId[];
};

export type OverflowItemsProps<T extends ObjectWithId = ObjectWithId> =
	OverflowItemsContextOptions<T> & {
		renderOverflow: RenderProp<OverflowItemsOverflowProps>;
	};

export type OverflowItemsAPI = {
	$root: {
		classList: ClassList;
		ref: (el: HTMLElement) => void;
		'data-responsive-items-is-reflowing': string | undefined;
	};
	$measure: {
		classList: ClassList;
		inert: boolean;
		ref: (el: HTMLElement) => void;
	};
	$render: {
		'data-responsive-items-container': string | undefined;
	};
	context: OverflowItemsContext;
	contextValue: OverflowItemsContextValue;
};
