import { createPressable } from '@no-comply/solid-composables';
import { combineProps, createClassList } from '@no-comply/solid-primitives';
import { type JSX, type ParentComponent, mergeProps } from 'solid-js';

import styles from './ListInputBoxItem.module.scss';
import type { ListInputBoxItemProps } from './types';

export const ListInputBoxItem: ParentComponent<ListInputBoxItemProps> = props => {
	const merged = mergeProps({ selected: false, tabIndex: -1 }, props);

	const { $root: $pressableRoot } = createPressable({
		get onPress() {
			return merged.onPress;
		},
	});

	const classList = createClassList(styles, () => ({
		...merged.classList,
		ListInputBoxItem: true,
		'is-selected': Boolean(merged.selected),
	}));

	const $aria = {
		role: 'option' as const,
		get 'aria-selected'() {
			return merged.selected;
		},
	};

	const $extra = {
		get tabIndex() {
			return merged.tabIndex;
		},
		classList,
	};

	const $ = combineProps($pressableRoot, $aria, $extra);

	return <div {...($ as JSX.HTMLAttributes<HTMLDivElement>)}>{merged.children}</div>;
};
