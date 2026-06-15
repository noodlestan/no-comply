import { Flex, Label, Select } from '@no-comply/standard-ui';
import { type Component, For } from 'solid-js';

import { DocsSection } from '../../../../content';
import { useComponentExamples } from '../../providers';

export const ComponentPlaygroundHeader: Component = () => {
	const { exampleList, currentExample, setCurrentExample } = useComponentExamples();

	const handleValueChange = (title: string) => {
		setCurrentExample(exampleList()?.find(example => example.title === title));
	};

	return (
		<DocsSection title="Playground">
			<Flex direction="row" align="center" gap="m">
				<Label>Example</Label>
				<Select
					length="auto"
					onValueChange={handleValueChange}
					value={currentExample()?.data.title}
				>
					<For each={exampleList()}>
						{example => (
							<option selected={example.title === currentExample()?.data.title}>
								{example.title}
							</option>
						)}
					</For>
				</Select>
			</Flex>
		</DocsSection>
	);
};
