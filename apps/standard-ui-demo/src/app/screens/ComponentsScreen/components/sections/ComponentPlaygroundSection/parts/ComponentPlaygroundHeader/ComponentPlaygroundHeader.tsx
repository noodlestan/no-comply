import { VisuallyHidden } from '@no-comply/solid-composables';
import { Display, Flex, Icon, Link, Text } from '@no-comply/standard-ui';
import BookOpenIcon from 'lucide-solid/icons/book-open';
import { type Component, Show } from 'solid-js';

import { routeFor } from '../../../../../../../navigation';
import { $ID_PLAYGROUND_TITLE } from '../../../../../constants';
import { useComponentExamples } from '../../../../../providers';
import { PlaygroundResetButton } from '../PlaygroundResetButton';

export const ComponentPlaygroundHeader: Component = () => {
	const { component, resetAllOverrides } = useComponentExamples();
	const { exampleList } = useComponentExamples();

	const handleResetresetPlaygroundClick = () => resetAllOverrides();

	// WIP conditionally show reset button
	// WIP make label sr only

	return (
		<Flex direction="row" align="baseline" justify="between" gap="l" wrap>
			<Flex direction="row" align="baseline" gap="l" wrap>
				<Display id={$ID_PLAYGROUND_TITLE} level={3}>
					Playground: <VisuallyHidden tag="span">{component().name}</VisuallyHidden>
				</Display>

				<Link href={routeFor.entity(component())}>
					<Flex direction="row" gap="xs" align="center" tag="span">
						<Icon icon={BookOpenIcon} size="small" /> <Text variant="small">API</Text>
					</Flex>
				</Link>
			</Flex>
			<Show when={!exampleList.loading && Number(exampleList()?.length) > 1}>
				<Flex direction="row" align="end" gap="m">
					<PlaygroundResetButton onPress={handleResetresetPlaygroundClick} label="Reset all" />
				</Flex>
			</Show>
		</Flex>
	);
};
