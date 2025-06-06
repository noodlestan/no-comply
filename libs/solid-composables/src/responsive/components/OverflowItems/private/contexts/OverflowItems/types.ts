import type { BaseContext } from '@no-comply/solid-contexts';
import type { ObjectWithId, RenderProp } from '@no-comply/solid-primitives';
import type { Accessor } from 'solid-js';

export type ItemProps<T extends ObjectWithId> = {
	item: ObjectWithId<T>;
	isCurrent: boolean;
};

type ToggleProps = {
	count: number;
};

export type OverflowItemsContextOptions<T extends ObjectWithId = ObjectWithId> = {
	items: T[];
	currentItemId: string | undefined;
	renderItem: RenderProp<ItemProps<T>>;
	renderToggle: RenderProp<ToggleProps>;
};

export type OverflowItemsContext = BaseContext & {
	type: 'responsive-items';
	items: Accessor<ObjectWithId[]>;
	currentItemId: Accessor<string | undefined>;
	visibleItems: Accessor<ObjectWithId[]>;
	overflowItems: Accessor<ObjectWithId[]>;
	isReflowing: Accessor<boolean>;
};

export type OverflowItemsContextOwnerAPI = {
	renderItem: RenderProp<ItemProps<ObjectWithId>>;
	renderToggle: RenderProp<ToggleProps>;
	testVisibleItems: Accessor<ObjectWithId[]>;
	testOverflowItems: Accessor<ObjectWithId[]>;
	startTest: () => void;
	nextTest: () => boolean;
	finishTest: () => void;
};

export type OverflowItemsContextValue = [OverflowItemsContext, OverflowItemsContextOwnerAPI];
