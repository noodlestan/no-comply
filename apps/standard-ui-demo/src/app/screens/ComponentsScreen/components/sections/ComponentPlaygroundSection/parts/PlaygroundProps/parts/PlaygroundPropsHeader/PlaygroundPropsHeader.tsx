/* eslint-disable dot-notation */
import type { ComponentEntityData } from '@no-comply/meta';
import { createIconValue } from '@no-comply/solid-contexts';
import { Display, Flex } from '@no-comply/standard-ui';
import type { TSXViewTarget } from '@purrtrait/view-tsx';
import List from 'lucide-solid/icons/list';
import ListCollapse from 'lucide-solid/icons/list-collapse';
import { type Component, type Setter, Show } from 'solid-js';

import {
	useComponentPlayground,
	useComponentPlaygroundProps,
} from '../../../../../../../providers';
import { PlaygroundResetButton } from '../../../PlaygroundResetButton';

import { PlaygroundTargetSelect, ToggleVisibility } from './parts';

type Props = {
	component: ComponentEntityData;
	targets?: { [key: string]: TSXViewTarget };
	showDocs: boolean;
	onShowDocsChange: Setter<boolean>;
	showGroups: boolean;
	onShowGroupsChange: Setter<boolean>;
	onResetTarget: (key: string) => void;
};

export const PlaygroundPropsHeader: Component<Props> = props => {
	const { currentExampleIndex, currentTargetKey } = useComponentPlayground();
	const { hasTargetOverrides } = useComponentPlaygroundProps();

	const hasMultitpleTargets = () => {
		const t = props.targets || {};
		return Object.keys(t).length > 1;
	};

	const handleShowDocs = (v: boolean) => {
		props.onShowDocsChange(v);
	};

	const handleResetTargetClick = () => props.onResetTarget(currentTargetKey() as string);

	return (
		<Flex direction="row" gap="l" align="center" justify="between" wrap>
			<Flex direction="row" gap="l" align="baseline" justify="start" wrap>
				<Flex direction="row" gap="m" align="end">
					<Display level={4}>Props</Display>
				</Flex>
				<Show when={hasMultitpleTargets()}>
					<Flex direction="row" gap="s" align="center">
						<PlaygroundTargetSelect />
					</Flex>
				</Show>
			</Flex>
			<Flex direction="row" gap="l" align="center" justify="between" wrap>
				<Flex direction="row" gap="s" align="center" wrap>
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
				<PlaygroundResetButton
					label="Reset all"
					onPress={handleResetTargetClick}
					disabled={
						!hasTargetOverrides(currentExampleIndex() as number, currentTargetKey() as string)
					}
				/>
			</Flex>
		</Flex>
	);
};
