import { type ParentComponent, Show } from 'solid-js';

import { createOverflowItemsToggle } from './createOverflowItemsToggle';

export const OverflowItemsToggle: ParentComponent = () => {
	const { count, renderToggle } = createOverflowItemsToggle();

	return <Show when={count()}>{renderToggle({ count: count() })}</Show>;
};
