/* eslint-disable dot-notation */
import type { ComponentEntityData } from '@no-comply/meta';
import { createIconValue } from '@no-comply/solid-contexts';
import { createChainedResource } from '@no-comply/solid-primitives';
import { Display, Flex } from '@no-comply/standard-ui';
import List from 'lucide-solid/icons/list';
import ListCollapse from 'lucide-solid/icons/list-collapse';
import { type Component, type Setter, Show } from 'solid-js';

import { useComponentExamples } from '../../../../../../../providers';
import { PlaygroundResetButton } from '../../../PlaygroundResetButton';

import { PlaygroundTargetSelect, ToggleVisibility } from './parts';

type Props = {
	component: ComponentEntityData;
	showDocs: boolean;
	onShowDocsChange: Setter<boolean>;
	showGroups: boolean;
	onShowGroupsChange: Setter<boolean>;
	onResetExample: () => void;
};

export const PlaygroundPropsHeader: Component<Props> = props => {
	const { currentExampleParsed } = useComponentExamples();

	const [targets] = createChainedResource(currentExampleParsed, parsed => parsed.targets);

	const hasMultitpleTargets = () => {
		const t = targets() || {};
		return Object.keys(t).length > 1;
	};

	const handleShowDocs = (v: boolean) => {
		props.onShowDocsChange(v);
	};

	const handleResetTargetClick = () => props.onResetExample();

	// WIP conditionally show reset button

	return (
		<Flex direction="row" gap="l" align="center" justify="between" wrap>
			<Flex direction="row" gap="l" align="baseline" justify="start" wrap>
				<Flex direction="row" gap="m" align="end">
					<Display level={4}>Props</Display>
				</Flex>
				<Show when={hasMultitpleTargets()}>
					<Flex direction="row" gap="s" align="center">
						<PlaygroundTargetSelect />
						<PlaygroundResetButton
							iconOnly
							label="Reset props to values from example"
							onPress={handleResetTargetClick}
						/>
					</Flex>
				</Show>
			</Flex>
			<Flex direction="row" gap="s" align="baseline" wrap>
				<ToggleVisibility
					value={props.showDocs}
					labels={{ on: 'Hide docs', off: 'Show docs' }}
					onValueChange={handleShowDocs}
				/>
				<ToggleVisibility
					value={props.showGroups}
					labels={{ on: 'Ungroup', off: 'Group' }}
					icons={{ on: createIconValue(ListCollapse), off: createIconValue(List) }}
					onValueChange={props.onShowGroupsChange}
				/>
			</Flex>
		</Flex>
	);
};
