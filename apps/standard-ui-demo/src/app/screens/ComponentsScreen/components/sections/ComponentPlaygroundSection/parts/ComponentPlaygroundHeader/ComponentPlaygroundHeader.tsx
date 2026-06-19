import { Flex, Label } from '@no-comply/standard-ui';
import { type Component } from 'solid-js';

import { DocsItem } from '../../../../../../../content';
import { useComponentExamples } from '../../../../../providers';
import { PlaygroundResetButton } from '../PlaygroundResetButton';

import { PlaygroundExampleSelect } from './parts';

export const ComponentPlaygroundHeader: Component = () => {
	const { resetAllOverrides } = useComponentExamples();

	const handleResetresetPlaygroundClick = () => resetAllOverrides();

	// WIP conditionally show reset button
	// WIP make label sr only

	return (
		<DocsItem>
			<Flex direction="row" align="center" justify="between" gap="l" wrap>
				<Flex direction="row" align="center" gap="m">
					<Label>Select example</Label>
					<PlaygroundExampleSelect />
				</Flex>
				<Flex direction="row" align="center" gap="m" paddingInlineEnd={'m'}>
					<PlaygroundResetButton
						onPress={handleResetresetPlaygroundClick}
						label="Reset all examples"
					/>
				</Flex>
			</Flex>
		</DocsItem>
	);
};
