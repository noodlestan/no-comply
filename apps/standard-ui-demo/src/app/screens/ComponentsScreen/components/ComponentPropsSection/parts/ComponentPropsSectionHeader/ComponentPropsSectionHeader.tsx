/* eslint-disable dot-notation */
import type { ComponentEntityData } from '@no-comply/meta-entities';
import { shortId } from '@no-comply/solid-primitives';
import {
	AlignFirstLine,
	Checkbox,
	Display,
	Flex,
	Icon,
	Label,
	Link,
	TextAligned,
} from '@no-comply/standard-ui';
import BookOpenIcon from 'lucide-solid/icons/book-open';
import { type Component, type Setter } from 'solid-js';

import { routeFor } from '../../../../../../navigation';

type Props = {
	component: ComponentEntityData;
	showDocs: boolean;
	onShowDocsChange: Setter<boolean>;
	showGroups: boolean;
	onShowGroupsChange: Setter<boolean>;
};

export const ComponentPropsSectionHeader: Component<Props> = props => {
	const docsFieldId = shortId();
	const groupsFieldId = shortId();

	const handleShowDocs = (v: boolean) => {
		props.onShowDocsChange(v);
	};
	return (
		<Flex direction="row" gap="l" align="baseline" justify="between">
			<Flex direction="row" gap="l" align="baseline">
				<Display level={3}>Props</Display>
				<AlignFirstLine height="s" type="text" variant="small">
					<Flex direction="row" gap="s" align="start">
						<Icon icon={BookOpenIcon} size="small" aligned />
						<TextAligned>
							<Link href={routeFor.entity(props.component)}>API Reference</Link>
						</TextAligned>
					</Flex>
				</AlignFirstLine>
			</Flex>
			<Flex direction="row" gap="l" align="baseline">
				<Flex direction="row-reverse" gap="s" align="center">
					<Label for={docsFieldId}>Show docs</Label>
					<Checkbox id={docsFieldId} checked={props.showDocs} onValueChange={handleShowDocs} />
				</Flex>
				<Flex direction="row-reverse" gap="s" align="center">
					<Label for={groupsFieldId}>Show groups</Label>
					<Checkbox
						id={groupsFieldId}
						checked={props.showGroups}
						onValueChange={props.onShowGroupsChange}
					/>
				</Flex>
			</Flex>
		</Flex>
	);
};
