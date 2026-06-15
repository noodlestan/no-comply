import { Flex } from '@no-comply/standard-ui';
import type { Component } from 'solid-js';

import { DocsItem } from '../../../../content';
import { useComponentExamples } from '../../providers';
import { ComponentPlaygroundHeader } from '../ComponentPlaygroundHeader';
import { ComponentPropsSection } from '../ComponentPropsSection';
import { ExamplePreview } from '../ExamplePreview';

export const ComponentPlaygroundSection: Component = () => {
	const { component, currentExample } = useComponentExamples();

	return (
		<DocsItem gap="l">
			<ComponentPlaygroundHeader />
			<Flex direction={{ _: 'column-reverse', l: 'row' }} gap="l" stretch="width">
				<Flex stretch="width">
					<ComponentPropsSection component={component} />
				</Flex>
				<Flex stretch="width">
					<ExamplePreview example={currentExample} />
				</Flex>
			</Flex>
		</DocsItem>
	);
};
