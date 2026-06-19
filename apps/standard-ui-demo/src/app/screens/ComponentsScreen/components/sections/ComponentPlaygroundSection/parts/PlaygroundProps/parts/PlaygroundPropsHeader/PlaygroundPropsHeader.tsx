/* eslint-disable dot-notation */
import type { ComponentEntityData } from '@no-comply/meta';
import { createIconValue } from '@no-comply/solid-contexts';
import { Display, Flex, Icon, Link, Text } from '@no-comply/standard-ui';
import BookOpenIcon from 'lucide-solid/icons/book-open';
import List from 'lucide-solid/icons/list';
import ListCollapse from 'lucide-solid/icons/list-collapse';
import { type Component, type Setter } from 'solid-js';

import { routeFor } from '../../../../../../../../../navigation';
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
					<Link href={routeFor.entity(props.component)}>
						<Flex direction="row" gap="xs" align="center" tag="span">
							<Icon icon={BookOpenIcon} size="small" /> <Text variant="small">API</Text>
						</Flex>
					</Link>
				</Flex>
				<Flex direction="row" gap="s" align="center">
					<PlaygroundTargetSelect />
					<PlaygroundResetButton
						iconOnly
						label="Reset props to values from example"
						onPress={handleResetTargetClick}
					/>
				</Flex>
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
