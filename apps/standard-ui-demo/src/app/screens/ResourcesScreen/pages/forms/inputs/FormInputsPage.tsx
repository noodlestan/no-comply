import {
	Checkbox,
	Display,
	Flex,
	NumberInput,
	RangeInput,
	SegmentedButton,
	SegmentedButtonItem,
	Select,
	TextInput,
} from '@no-comply/standard-ui';
import { type Component, createSignal } from 'solid-js';

import { ResourcesPage } from '../../../private';

export const FormInputsPage: Component = () => {
	const [textValue, setTextValue] = createSignal('foo');
	const [numberValue, setNumberValue] = createSignal(123.45);
	const [rangeValue, setRangeValue] = createSignal(5);
	const [selectValue, setSelectValue] = createSignal('middle');
	const [checkboxValue, setCheckboxValue] = createSignal(true);

	const options = () => (
		<>
			<option value="top">top</option>
			<option value="middle">middle</option>
			<option value="bottom">bottom</option>
		</>
	);

	const buttonItems = () => (
		<>
			<SegmentedButtonItem value="top">top</SegmentedButtonItem>
			<SegmentedButtonItem value="middle">middle</SegmentedButtonItem>
			<SegmentedButtonItem value="bottom">bottom</SegmentedButtonItem>
		</>
	);

	return (
		<ResourcesPage title="Variants">
			<Display level={3}>small</Display>

			<Flex direction="row" align="center" gap="l">
				<Checkbox size="xs" checked={checkboxValue()} onValueChange={setCheckboxValue} />
				<TextInput length="s" size="xs" value={textValue()} onValueChange={setTextValue} />
				<NumberInput
					length="s"
					size="xs"
					value={String(numberValue())}
					onValueChange={setNumberValue}
				/>
				<RangeInput size="xs" value={String(rangeValue())} onValueChange={setRangeValue} />
				<Select length="s" size="xs" value={selectValue()} onValueChange={setSelectValue}>
					{options()}
				</Select>
				<SegmentedButton
					name="small"
					size="small"
					value={selectValue()}
					onValueChange={setSelectValue}
				>
					{buttonItems()}
				</SegmentedButton>
			</Flex>

			<Display level={3}>normal</Display>

			<Flex direction="row" align="center" gap="l">
				<Checkbox size="s" checked={checkboxValue()} onValueChange={setCheckboxValue} />
				<TextInput length="s" size="s" value={textValue()} onValueChange={setTextValue} />
				<NumberInput
					length="s"
					size="s"
					value={String(numberValue())}
					onValueChange={setNumberValue}
				/>
				<RangeInput size="s" value={String(rangeValue())} onValueChange={setRangeValue} />
				<Select length="s" size="s" value={selectValue()} onValueChange={setSelectValue}>
					{options()}
				</Select>
				<SegmentedButton
					name="normal"
					size="normal"
					value={selectValue()}
					onValueChange={setSelectValue}
				>
					{buttonItems()}
				</SegmentedButton>
			</Flex>

			<Display level={3}>medium</Display>

			<Flex direction="row" align="center" gap="l">
				<Checkbox size="m" checked={checkboxValue()} onValueChange={setCheckboxValue} />
				<TextInput length="s" size="m" value={textValue()} onValueChange={setTextValue} />
				<NumberInput
					length="s"
					size="m"
					value={String(numberValue())}
					onValueChange={setNumberValue}
				/>
				<RangeInput size="m" value={String(rangeValue())} onValueChange={setRangeValue} />
				<Select length="s" size="m" value={selectValue()} onValueChange={setSelectValue}>
					{options()}
				</Select>
				<SegmentedButton
					name="medium"
					size="medium"
					value={selectValue()}
					onValueChange={setSelectValue}
				>
					{buttonItems()}
				</SegmentedButton>
			</Flex>

			<Display level={3}>large</Display>

			<Flex direction="row" align="center" gap="l">
				<Checkbox size="l" checked={checkboxValue()} onValueChange={setCheckboxValue} />
				<TextInput length="s" size="l" value={textValue()} onValueChange={setTextValue} />
				<NumberInput
					length="s"
					size="l"
					value={String(numberValue())}
					onValueChange={setNumberValue}
				/>
				<RangeInput size="l" value={String(rangeValue())} onValueChange={setRangeValue} />
				<Select length="s" size="l" value={selectValue()} onValueChange={setSelectValue}>
					{options()}
				</Select>
				<SegmentedButton
					name="large"
					size="large"
					value={selectValue()}
					onValueChange={setSelectValue}
				>
					{buttonItems()}
				</SegmentedButton>
			</Flex>
		</ResourcesPage>
	);
};
