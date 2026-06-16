import { Flex } from '@no-comply/standard-ui';
import type { Component } from 'solid-js';

import { DocsItem } from '../../../../content';
import { useComponentExamples } from '../../providers';
import { ComponentPlaygroundExample } from '../ComponentPlaygroundExample';
import { ComponentPlaygroundHeader } from '../ComponentPlaygroundHeader';
import { ComponentPropsSection } from '../ComponentPropsSection';

export const ComponentPlaygroundSection: Component = () => {
	const { component } = useComponentExamples();

	return (
		<DocsItem gap="l">
			<ComponentPlaygroundHeader />
			<Flex direction={{ _: 'column-reverse', l: 'row' }} gap="l" stretch="width">
				<Flex stretch="width">
					<ComponentPropsSection component={component} />
				</Flex>
				<Flex stretch="width">
					<ComponentPlaygroundExample />
				</Flex>
			</Flex>
		</DocsItem>
	);
};
