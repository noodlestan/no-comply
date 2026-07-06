import { type ClosedTagProps, combineProps } from '@no-comply/solid-primitives';
import { type Component, splitProps } from 'solid-js';
import { Dynamic } from 'solid-js/web';

import { TreeListContextProvider } from '../../providers';

import { TREE_LIST_BASE_PROPS } from './constants';
import { createTreeListBase } from './createTreeListBase';
import type { TreeListBaseProps } from './types';

type Props = ClosedTagProps & TreeListBaseProps;

export const TreeListBase: Component<Props> = props => {
	const [locals, $others] = splitProps(props, TREE_LIST_BASE_PROPS);

	const tree = createTreeListBase(locals);
	const { $root, _treeListItem, contextValue } = tree;
	const $ = combineProps($others, $root);

	return (
		<TreeListContextProvider context={contextValue}>
			<div {...$}>
				<Dynamic {..._treeListItem} />
			</div>
		</TreeListContextProvider>
	);
};
