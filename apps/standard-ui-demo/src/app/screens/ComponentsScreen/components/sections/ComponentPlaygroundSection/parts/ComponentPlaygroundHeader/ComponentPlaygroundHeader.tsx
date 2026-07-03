import { VisuallyHidden } from '@no-comply/solid-composables';
import { Display, Flex, Link } from '@no-comply/standard-ui';
import { type Component, Show } from 'solid-js';

import { APILink } from '../../../../../../../components';
import { routeFor } from '../../../../../../../navigation';
import { $ID_PLAYGROUND_STATUS, $ID_PLAYGROUND_TITLE } from '../../../../../constants';
import { useComponentExamples, useComponentPlaygroundProps } from '../../../../../providers';
import { PlaygroundResetButton } from '../PlaygroundResetButton';

export const ComponentPlaygroundHeader: Component = () => {
	const { component, exampleList } = useComponentExamples();
	const { resetAllOverrides, hasOverrides } = useComponentPlaygroundProps();

	const handleResetresetPlaygroundClick = () => resetAllOverrides();

	const showResetButton = () =>
		!exampleList.loading && Number(exampleList()?.length) > 1 && hasOverrides();

	return (
		<Flex tag="header" direction="row" justify="between" align="end" gap="l" wrap>
			<Flex direction="row" align="end" gap="l" wrap>
				<Display id={$ID_PLAYGROUND_TITLE} level={3} size="normal">
					Playground: {component().name}
				</Display>

				<Flex
					tag="nav"
					direction="row"
					align="end"
					gap="l"
					wrap
					aria-label={`Links for ${component().name} component`}
				>
					<Link href={routeFor.component(component().name)}>Component page</Link>
					<APILink entity={component()} />
				</Flex>
			</Flex>

			<VisuallyHidden id={$ID_PLAYGROUND_STATUS} role="status" aria-atomic="true">
				<Show when={exampleList.loading}>Playground loading</Show>
				<Show when={!exampleList.loading}>
					Playground loaded {Number(exampleList()?.length)} examples
					<Show when={hasOverrides()}>Playground modified</Show>
				</Show>
			</VisuallyHidden>

			<Flex role="toolbar" direction="row" align="end" gap="m" aria-label="Playground actions">
				<Show when={showResetButton()}>
					<PlaygroundResetButton
						onPress={handleResetresetPlaygroundClick}
						label="Reset playground"
					/>
				</Show>
			</Flex>
		</Flex>
	);
};
