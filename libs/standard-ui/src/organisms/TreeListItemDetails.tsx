import {
	FocusableBase,
	type TreeNode,
	createTreeListItemDetails,
} from '@no-comply/solid-composables';
import { staticClassList } from '@no-comply/solid-primitives';
import { type Component, Show } from 'solid-js';
import { Dynamic } from 'solid-js/web';

import { Flex } from '../layout';

import styles from './TreeListItemDetails.module.scss';

export type TreeListItemDetailsProps = {
	node: TreeNode;
	expand: number | boolean | undefined;
	level: number;
	parent: TreeNode | undefined;
	parentSelected: boolean;
};

export const TreeListItemDetails: Component<TreeListItemDetailsProps> = props => {
	const { hasToggle, $root, _focusable, _buttonExpand, _treeListItemContents } =
		createTreeListItemDetails(props);

	const toggleClassList = staticClassList(styles, '-Toggle');
	const contentsClassList = staticClassList(styles, '-Contents');

	return (
		<Flex direction="row" align="center" {...$root}>
			<FocusableBase {..._focusable}>
				{() => (
					<Flex direction="row" align="center" {...$root}>
						<Show when={hasToggle()}>
							<div classList={toggleClassList}>
								<Dynamic {..._buttonExpand} />
							</div>
						</Show>
						<Flex stretch="width" classList={contentsClassList}>
							<Dynamic {..._treeListItemContents} />
						</Flex>
					</Flex>
				)}
			</FocusableBase>
		</Flex>
	);
};
