import { Flex, Label, Select } from '@no-comply/standard-ui';
import { type Component, For } from 'solid-js';

import { type ComponentExampleData, useComponentExamples } from '../../../../../../../providers';

export const PlaygroundExampleSelect: Component = () => {
	const { exampleList, currentExample, setCurrentExample } = useComponentExamples();

	const isSelected = (example: ComponentExampleData) => example.title === currentExample()?.title;

	const handleValueChange = (title: string) => {
		setCurrentExample(exampleList()?.find(example => example.title === title));
	};

	const placeholder = (): string | undefined => {
		if (exampleList.loading) {
			return 'loading ...';
		}
		if (!exampleList()?.length) {
			return 'Example';
		}
	};

	return (
		<Flex direction="column" align="start" gap="xs">
			<Label variant="small">Select example</Label>
			<Select
				size="m"
				length="m"
				onValueChange={handleValueChange}
				value={currentExample()?.title}
				disabled={exampleList.loading}
				placeholder={placeholder()}
			>
				<For each={exampleList()}>
					{example => <option selected={isSelected(example)}>{example.title}</option>}
				</For>
			</Select>
		</Flex>
	);
};
