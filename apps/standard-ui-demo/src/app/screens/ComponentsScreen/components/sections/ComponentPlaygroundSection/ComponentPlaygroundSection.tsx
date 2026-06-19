import { Flex } from '@no-comply/standard-ui';
import { type Component, Show } from 'solid-js';

import { DocsSection } from '../../../../../content';
import { useComponentExamples } from '../../../providers';

import { ComponentPlaygroundHeader, PlaygroundExample, PlaygroundProps } from './parts';

export const ComponentPlaygroundSection: Component = () => {
	const { component, exampleList } = useComponentExamples();

	return (
		<DocsSection title="Playground">
			<Show when={!exampleList.loading && Number(exampleList()?.length) > 1}>
				<ComponentPlaygroundHeader />
			</Show>
			<Flex direction={{ _: 'column-reverse', l: 'row' }} gap="l" stretch="width">
				<Flex stretch="width">
					<PlaygroundProps component={component()} />
				</Flex>
				<Flex stretch="width">
					<PlaygroundExample />
				</Flex>
			</Flex>
		</DocsSection>
	);
};
