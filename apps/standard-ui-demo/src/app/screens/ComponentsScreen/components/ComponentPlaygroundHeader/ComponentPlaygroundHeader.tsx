import { Flex, Label, Select } from '@no-comply/standard-ui';
import { type Component, For } from 'solid-js';

import { DocsSection } from '../../../../content';
import { useComponentExamples } from '../../providers';

export const ComponentPlaygroundHeader: Component = () => {
	const { exampleList, currentExample, setCurrentExample } = useComponentExamples();

	const handleValueChange = (name: string) => {
		setCurrentExample(exampleList()?.find(example => example.name === name));
	};

	return (
		<DocsSection title="Playground">
			<Flex direction="row" align="center" gap="m">
				<Label>Example</Label>
				<Select length="auto" onValueChange={handleValueChange} value={currentExample()?.data.name}>
					<For each={exampleList()}>
						{example => (
							<option selected={example.name === currentExample()?.data.name}>
								{example.name}
							</option>
						)}
					</For>
				</Select>
			</Flex>
		</DocsSection>
	);
};
