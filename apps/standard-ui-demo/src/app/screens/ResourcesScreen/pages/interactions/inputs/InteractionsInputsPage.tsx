import type { ToggleActionLabelsProp } from '@no-comply/solid-composables';
import { computedProps, shortId } from '@no-comply/solid-primitives';
import {
	Checkbox,
	Display,
	Flex,
	Icon,
	NumberInput,
	RangeInput,
	SegmentedButton,
	SegmentedButtonItem,
	Select,
	Surface,
	Text,
	TextInput,
	ToggleButton,
} from '@no-comply/standard-ui';
import ClockIcon from 'lucide-solid/icons/clock';
import { type Component, createSignal } from 'solid-js';

import { ResourcesPage } from '../../../private';

const DISABLED_TOGGLE_LABELS: ToggleActionLabelsProp = {
	on: 'Disabled',
	off: 'Enabled',
};

const INVALID_TOGGLE_LABELS: ToggleActionLabelsProp = {
	on: 'Invalid',
	off: 'Valid',
};

const POSITIVE_TOGGLE_LABELS: ToggleActionLabelsProp = {
	on: 'Positive',
	off: 'Neutral',
};

const MODIFIED_TOGGLE_LABELS: ToggleActionLabelsProp = {
	on: 'Modified',
	off: 'Unmodified',
};

export const InteractionsInputsPage: Component = () => {
	const [textValue, setTextValue] = createSignal('foo');
	const [numberValue, setNumberValue] = createSignal(123.45);
	const [rangeValue, setRangeValue] = createSignal(5);
	const [selectValue, setSelectValue] = createSignal('top');
	const [checkboxValue, setCheckboxValue] = createSignal(true);

	const [disabled, setDisabled] = createSignal(false);
	const [invalid, setInvalid] = createSignal(false);
	const [positive, setPositive] = createSignal(false);
	const [modified, setModified] = createSignal(false);

	const $ = computedProps({
		disabled,
		invalid,
		positive,
		modified,
	});
	const options = () => (
		<>
			<option value="top">top</option>
			<option value="bottom">bottom</option>
		</>
	);

	const buttonItems = () => (
		<>
			<SegmentedButtonItem value="top">top</SegmentedButtonItem>
			<SegmentedButtonItem value="bottom">bottom</SegmentedButtonItem>
		</>
	);

	const toolbarLabelId = shortId();

	return (
		<ResourcesPage title="Inputs">
			<Surface variant="panel" role="toolbar" padding="xs" aria-labelledby={toolbarLabelId}>
				<Flex direction="row" align="center" gap="l" wrap>
					<Text tag="h3" variant="small" id={toolbarLabelId}>
						Apply to all
					</Text>
					<Flex direction="row" gap="xs" wrap>
						<ToggleButton
							size="small"
							variant="secondary"
							value={disabled()}
							onPress={() => setDisabled(v => !v)}
							labels={DISABLED_TOGGLE_LABELS}
						/>
						<ToggleButton
							size="small"
							variant="secondary"
							value={invalid()}
							onPress={() => setInvalid(v => !v)}
							labels={INVALID_TOGGLE_LABELS}
						/>
						<ToggleButton
							size="small"
							variant="secondary"
							value={positive()}
							onPress={() => setPositive(v => !v)}
							labels={POSITIVE_TOGGLE_LABELS}
						/>
						<ToggleButton
							size="small"
							variant="secondary"
							value={modified()}
							onPress={() => setModified(v => !v)}
							labels={MODIFIED_TOGGLE_LABELS}
						/>
					</Flex>
				</Flex>
			</Surface>

			<Display level={3}>small</Display>

			<Flex direction="row" align="center" gap="l" wrap>
				<Icon size="normal" icon={ClockIcon} />
				<Checkbox size="xs" checked={checkboxValue()} onValueChange={setCheckboxValue} {...$} />
				<TextInput
					length="s"
					size="small"
					value={textValue()}
					onValueChange={setTextValue}
					{...$}
				/>
				<NumberInput
					length="s"
					size="small"
					value={String(numberValue())}
					onValueChange={setNumberValue}
					{...$}
				/>
				<RangeInput size="xs" value={String(rangeValue())} onValueChange={setRangeValue} {...$} />
				<Select length="s" size="xs" value={selectValue()} onValueChange={setSelectValue} {...$}>
					{options()}
				</Select>
				<SegmentedButton
					name="small"
					size="small"
					value={selectValue()}
					onValueChange={setSelectValue}
					{...$}
				>
					{buttonItems()}
				</SegmentedButton>
			</Flex>

			<Display level={3}>normal</Display>

			<Flex direction="row" align="center" gap="l" wrap>
				<Icon size="medium" icon={ClockIcon} />
				<Checkbox size="s" checked={checkboxValue()} onValueChange={setCheckboxValue} {...$} />
				<TextInput
					length="s"
					size="normal"
					value={textValue()}
					onValueChange={setTextValue}
					{...$}
				/>
				<NumberInput
					length="s"
					size="normal"
					value={String(numberValue())}
					onValueChange={setNumberValue}
					{...$}
				/>
				<RangeInput size="s" value={String(rangeValue())} onValueChange={setRangeValue} {...$} />
				<Select length="s" size="s" value={selectValue()} onValueChange={setSelectValue} {...$}>
					{options()}
				</Select>
				<SegmentedButton
					name="normal"
					size="normal"
					value={selectValue()}
					onValueChange={setSelectValue}
					{...$}
				>
					{buttonItems()}
				</SegmentedButton>
			</Flex>

			<Display level={3}>medium</Display>

			<Flex direction="row" align="center" gap="l" wrap>
				<Icon size="large" icon={ClockIcon} />
				<Checkbox size="m" checked={checkboxValue()} onValueChange={setCheckboxValue} {...$} />
				<TextInput
					length="s"
					size="medium"
					value={textValue()}
					onValueChange={setTextValue}
					{...$}
				/>
				<NumberInput
					length="s"
					size="medium"
					value={String(numberValue())}
					onValueChange={setNumberValue}
					{...$}
				/>
				<RangeInput size="m" value={String(rangeValue())} onValueChange={setRangeValue} {...$} />
				<Select length="s" size="m" value={selectValue()} onValueChange={setSelectValue} {...$}>
					{options()}
				</Select>
				<SegmentedButton
					name="medium"
					size="medium"
					value={selectValue()}
					onValueChange={setSelectValue}
					{...$}
				>
					{buttonItems()}
				</SegmentedButton>
			</Flex>

			<Display level={3}>large</Display>

			<Flex direction="row" align="center" gap="l" wrap>
				<Icon size="large" icon={ClockIcon} />
				<Checkbox size="l" checked={checkboxValue()} onValueChange={setCheckboxValue} {...$} />
				<TextInput
					length="s"
					size="large"
					value={textValue()}
					onValueChange={setTextValue}
					{...$}
				/>
				<NumberInput
					length="s"
					size="large"
					value={String(numberValue())}
					onValueChange={setNumberValue}
					{...$}
				/>
				<RangeInput size="l" value={String(rangeValue())} onValueChange={setRangeValue} {...$} />
				<Select length="s" size="l" value={selectValue()} onValueChange={setSelectValue} {...$}>
					{options()}
				</Select>
				<SegmentedButton
					name="large"
					size="large"
					value={selectValue()}
					onValueChange={setSelectValue}
					{...$}
				>
					{buttonItems()}
				</SegmentedButton>
			</Flex>
		</ResourcesPage>
	);
};
