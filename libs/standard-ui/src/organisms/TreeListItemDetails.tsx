import { FocusableBase, createTreeListItemDetails } from '@no-comply/solid-composables';
import { staticClassList } from '@no-comply/solid-primitives';
import { type Component, Show } from 'solid-js';
import { Dynamic } from 'solid-js/web';

import { Flex } from '../layout';

import styles from './TreeListItemDetails.module.scss';
import type { TreeListItemDetailsProps } from './types';

export const TreeListItemDetails: Component<TreeListItemDetailsProps> = props => {
	const { hasToggle, $root, _focusable, _buttonExpand, _treeListItemContents } =
		createTreeListItemDetails(props);

	const classList = staticClassList(styles, 'TreeListItemDetails');
	const toggleClassList = staticClassList(styles, '-Toggle');
	const contentsClassList = staticClassList(styles, '-Contents');

	return (
		<Flex direction="row" align="center" classList={classList}>
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
