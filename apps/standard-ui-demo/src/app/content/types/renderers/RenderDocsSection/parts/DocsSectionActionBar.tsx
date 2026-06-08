import { shortId } from '@no-comply/solid-primitives';
import { Button, Flex, Icon, Label, Select } from '@no-comply/standard-ui';
import ExpandIcon from 'lucide-solid/icons/expand';
import CollapseIcon from 'lucide-solid/icons/list-collapse';
import { type Component, For, Show } from 'solid-js';

import type { DocsItemData } from '../../../types';

export type DocsSectionAtionBarProps = {
	showItemSelector: boolean;
	isExpanded: boolean;
	currentIndex: string;
	items: DocsItemData[];
	onToggleExpanded: () => void;
	onValueChange: (value: string) => void;
};

export const DocsSectionActionBar: Component<DocsSectionAtionBarProps> = props => {
	const id = shortId();

	const icon = () => (props.isExpanded ? CollapseIcon : ExpandIcon);
	const label = () => (props.isExpanded ? 'Collapse' : 'Expand all');

	return (
		<Flex direction="row" align="center" justify="between" gap="s">
			<Flex direction="row" align="center" justify="start" gap="s">
				<Show when={props.showItemSelector}>
					<Label for={id}>Example:</Label>
					<Select id={id} value={props.currentIndex} onValueChange={props.onValueChange}>
						<For each={props.items}>
							{(item, index) => <option value={index()}>{item.title}</option>}
						</For>
					</Select>
				</Show>
			</Flex>
			<Flex direction="row" align="center" justify="end" gap="s">
				<Button variant="plain" onPress={props.onToggleExpanded}>
					<Icon icon={icon()} />
					{label()}
				</Button>
			</Flex>
		</Flex>
	);
};
