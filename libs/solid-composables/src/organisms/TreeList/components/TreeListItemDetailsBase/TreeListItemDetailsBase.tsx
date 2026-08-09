import { combineProps } from '@no-comply/solid-primitives';
import { type Component, Show, splitProps } from 'solid-js';
import { Dynamic } from 'solid-js/web';

import { FocusableBase } from '../../../../focus';
import { FlexBase, LayoutBase } from '../../../../layout';

import { TREE_LIST_ITEM_DETAILS_BASE_PROPS } from './constants';
import { createTreeListItemDetailsBase } from './createTreeListItemDetailsBase';
import type { TreeListItemDetailsBaseProps } from './types';

export const TreeListItemDetailsBase: Component<TreeListItemDetailsBaseProps> = props => {
	const [locals, $others] = splitProps(props, TREE_LIST_ITEM_DETAILS_BASE_PROPS);

	const { $root, _focusable, $toggle, _buttonExpand, $contents, _treeListItemContents, hasToggle } =
		createTreeListItemDetailsBase(locals);

	const $ = combineProps($others, $root);

	return (
		<LayoutBase stretch="full" {...$}>
			<FocusableBase {..._focusable}>
				{() => (
					<FlexBase direction="row" align="center">
						<Show when={hasToggle()}>
							<div {...$toggle}>
								<Dynamic {..._buttonExpand} />
							</div>
						</Show>
						<FlexBase stretch="width" {...$contents}>
							<Dynamic {..._treeListItemContents} />
						</FlexBase>
					</FlexBase>
				)}
			</FocusableBase>
		</LayoutBase>
	);
};
