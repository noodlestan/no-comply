/* eslint-disable dot-notation */
import type { ComponentEntityData } from '@no-comply/meta';
import { VisuallyHidden } from '@no-comply/solid-composables';
import { Display, Flex } from '@no-comply/standard-ui';
import type { TSXViewTarget } from '@purrtrait/view-tsx';
import { type Component, type Setter, Show } from 'solid-js';

import { $ID_PLAYGROUND_PROPS_TITLE } from '../../../../../../../constants';
import {
	useComponentPlayground,
	useComponentPlaygroundProps,
} from '../../../../../../../providers';
import { PlaygroundResetButton } from '../../../PlaygroundResetButton';

import { PlaygroundTargetSelect, ToggleGroupProps, ToggleShowDocs } from './parts';

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

	const handleToggleDocs = () => props.onShowDocsChange(!props.showDocs);
	const handleToggleGroups = () => props.onShowGroupsChange(!props.showGroups);

	const handleResetTargetClick = () => props.onResetTarget(currentTargetKey() as string);

	return (
		<Flex tag="header" direction="row" gap="l" align="center" justify="between" wrap>
			<Flex direction="row" gap="l" align="baseline" justify="start" wrap>
				<Flex direction="row" gap="m" align="end">
					<Display id={$ID_PLAYGROUND_PROPS_TITLE} level={4} variant="xs">
						Props <VisuallyHidden>Editor</VisuallyHidden>
						<Show when={hasMultitpleTargets()}>
							<VisuallyHidden>for {currentTargetKey()}</VisuallyHidden>
						</Show>
					</Display>
				</Flex>
			</Flex>
			<Flex role="toolbar" direction="row" gap="l" align="center" justify="between" wrap>
				<Show when={hasMultitpleTargets()}>
					<PlaygroundTargetSelect />
				</Show>
				<Flex direction="row" gap="s" align="center" wrap>
					<ToggleShowDocs value={props.showDocs} onValueChange={handleToggleDocs} />
					<ToggleGroupProps value={props.showGroups} onValueChange={handleToggleGroups} />
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
