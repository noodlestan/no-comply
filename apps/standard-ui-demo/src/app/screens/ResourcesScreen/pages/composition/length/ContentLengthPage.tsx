import {
	Display,
	Divider,
	Flex,
	NumberInput,
	RangeInput,
	Select,
	TextInput,
} from '@no-comply/standard-ui';
import { type Component, createSignal } from 'solid-js';

import { ResourcesPage } from '../../../private';

export const ContentLengthPage: Component = () => {
	const [textValue, setTextValue] = createSignal('foo');
	const [numberValue, setNumberValue] = createSignal(123.45);
	const [rangeValue, setRangeValue] = createSignal(5);
	const [selectValue, setSelectValue] = createSignal('middle');

	const options = () => (
		<>
			<option value="top">top</option>
			<option value="middle">middle</option>
			<option value="bottom">bottom</option>
		</>
	);

	return (
		<ResourcesPage title="Content Length">
			<Display level={3}>short</Display>

			<Flex direction="column" justify="center" gap="l">
				<TextInput length="short" value={textValue()} onValueChange={setTextValue} />
				<NumberInput length="short" value={String(numberValue())} onValueChange={setNumberValue} />
				<Divider length="short" />
				<RangeInput length="short" value={String(rangeValue())} onValueChange={setRangeValue} />
				<Select length="short" value={selectValue()} onValueChange={setSelectValue}>
					{options()}
				</Select>
			</Flex>

			<Display level={3}>default (medium)</Display>

			<Flex direction="column" justify="center" gap="l">
				<TextInput value={textValue()} onValueChange={setTextValue} />
				<NumberInput value={String(numberValue())} onValueChange={setNumberValue} />
				<Divider />
				<RangeInput value={String(rangeValue())} onValueChange={setRangeValue} />
				<Select value={selectValue()} onValueChange={setSelectValue}>
					{options()}
				</Select>
			</Flex>

			<Display level={3}>medium</Display>

			<Flex direction="column" justify="center" gap="l">
				<TextInput length="medium" value={textValue()} onValueChange={setTextValue} />
				<NumberInput length="medium" value={String(numberValue())} onValueChange={setNumberValue} />
				<Divider length="medium" />
				<RangeInput length="medium" value={String(rangeValue())} onValueChange={setRangeValue} />
				<Select length="medium" value={selectValue()} onValueChange={setSelectValue}>
					{options()}
				</Select>
			</Flex>

			<Display level={3}>Long</Display>

			<Flex direction="column" justify="center" gap="l">
				<TextInput length="long" value={textValue()} onValueChange={setTextValue} />
				<NumberInput length="long" value={String(numberValue())} onValueChange={setNumberValue} />
				<Divider length="long" />
				<RangeInput length="long" value={String(rangeValue())} onValueChange={setRangeValue} />
				<Select length="long" value={selectValue()} onValueChange={setSelectValue}>
					{options()}
				</Select>
			</Flex>

			<Display level={3}>Full</Display>

			<Flex direction="column" justify="center" gap="l">
				<TextInput length="full" value={textValue()} onValueChange={setTextValue} />
				<NumberInput length="full" value={String(numberValue())} onValueChange={setNumberValue} />
				<Divider length="full" />
				<RangeInput length="full" value={String(rangeValue())} onValueChange={setRangeValue} />
				<Select length="full" value={selectValue()} onValueChange={setSelectValue}>
					{options()}
				</Select>
			</Flex>
		</ResourcesPage>
	);
};
