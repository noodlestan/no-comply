/* eslint-disable dot-notation */
import type { ComponentEntityData } from '@no-comply/meta';
import { shortId } from '@no-comply/solid-primitives';
import {
	AlignFirstLine,
	Checkbox,
	Display,
	Flex,
	Icon,
	LabelAligned,
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
		<Flex direction="row" gap="l" align="baseline" justify="between" wrap>
			<Flex direction="row" gap="m" align="baseline" wrap>
				<Display level={4}>Props</Display>
				<AlignFirstLine height="s" type="text" variant="small">
					<Link href={routeFor.entity(props.component)}>
						<Flex direction="row" gap="xs" align="start" tag="span">
							<Icon icon={BookOpenIcon} size="small" aligned />{' '}
							<TextAligned>API Reference</TextAligned>
						</Flex>
					</Link>
				</AlignFirstLine>
			</Flex>
			<Flex direction="row" gap="m" align="baseline" wrap>
				<AlignFirstLine height="xs" type="label" variant="small">
					<Flex direction="row-reverse" gap="xs" align="start">
						<LabelAligned for={docsFieldId}>Show docs</LabelAligned>
						<Checkbox id={docsFieldId} checked={props.showDocs} onValueChange={handleShowDocs} />
					</Flex>
				</AlignFirstLine>
				<AlignFirstLine height="xs" type="label" variant="small">
					<Flex direction="row-reverse" gap="xs" align="start">
						<LabelAligned for={groupsFieldId}>Show groups</LabelAligned>
						<Checkbox
							id={groupsFieldId}
							checked={props.showGroups}
							onValueChange={props.onShowGroupsChange}
						/>
					</Flex>
				</AlignFirstLine>
			</Flex>
		</Flex>
	);
};
