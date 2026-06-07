/* eslint-disable dot-notation */
import type { ComponentEntityData } from '@no-comply/meta-entities';
import { Display, Flex, Icon, Label, Link, Text } from '@no-comply/standard-ui';
import BookOpenIcon from 'lucide-solid/icons/book-open';
import { type Component } from 'solid-js';

import { routeFor } from '../../../../../../navigation';

type Props = {
	component: ComponentEntityData;
};

export const ComponentPropsSectionHeader: Component<Props> = props => {
	return (
		<Flex direction="row" gap="l" align="baseline" justify="between">
			<Display level={3}>Props</Display>
			<Flex direction="row" gap="l" align="baseline">
				<Flex direction="row" gap="s" align="center">
					<Icon icon={BookOpenIcon} size="small" />
					<Text>
						<Link href={routeFor.entity(props.component)}>API Reference</Link>
					</Text>
				</Flex>
				<Label>
					<input type="checkbox" />
					Show docs
				</Label>
			</Flex>
		</Flex>
	);
};
