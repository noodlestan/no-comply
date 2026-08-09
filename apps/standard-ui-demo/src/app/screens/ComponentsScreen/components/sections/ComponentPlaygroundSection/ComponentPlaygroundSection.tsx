import { Flex, Layout } from '@no-comply/standard-ui';
import { type Component } from 'solid-js';

import { $ID_PLAYGROUND_STATUS, $ID_PLAYGROUND_TITLE } from '../../../constants';
import {
	ComponentPlaygroundPropsProvider,
	ComponentPlaygroundProvider,
	useComponentExamples,
} from '../../../providers';

import { ComponentPlaygroundHeader, PlaygroundExample, PlaygroundProps } from './parts';

export const ComponentPlaygroundSection: Component = () => {
	const { component, exampleList } = useComponentExamples();

	return (
		<ComponentPlaygroundProvider examples={exampleList}>
			<ComponentPlaygroundPropsProvider component={component()}>
				<Layout
					tag="section"
					role="region"
					padding={['l', 'xl', 's']}
					stretch="full"
					uncontained
					aria-labelledby={$ID_PLAYGROUND_TITLE}
					aria-describedby={$ID_PLAYGROUND_STATUS}
				>
					<Flex direction="column" gap="m" stretch="full">
						<ComponentPlaygroundHeader />
						<Flex direction={{ _: 'column', l: 'row' }} gap="s" stretch="full">
							<PlaygroundExample />
							<PlaygroundProps component={component()} />
						</Flex>
					</Flex>
				</Layout>
			</ComponentPlaygroundPropsProvider>
		</ComponentPlaygroundProvider>
	);
};
