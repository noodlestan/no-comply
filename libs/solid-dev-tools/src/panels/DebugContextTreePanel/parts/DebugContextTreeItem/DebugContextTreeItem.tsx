import type { TreeListItemContentsProps } from '@no-comply/solid-composables';
import { type ContextNode } from '@no-comply/solid-contexts';
import { Display, Flex } from '@no-comply/standard-ui';
import { type Component } from 'solid-js';

export const DebugContextTreeItem: Component<TreeListItemContentsProps> = props => {
	const node = () => props.node.object as ContextNode;

	return (
		<Flex direction="row" align="center" gap="m">
			<Display level={4}>{node().id}</Display>
			<Flex tag="ul" direction="row" gap="m" wrap aria-label="Context Type">
				{node().value?.type}
			</Flex>
		</Flex>
	);
};
