import type { ToggleActionLabels } from '@no-comply/solid-composables';
import { computedProps, shortId } from '@no-comply/solid-primitives';
import {
	Button,
	Checkbox,
	Display,
	Flex,
	IconButton,
	Menu,
	MenuItemAction,
	RangeInput,
	SegmentedButton,
	SegmentedButtonItem,
	Select,
	Surface,
	TextInput,
	ToggleButton,
} from '@no-comply/standard-ui';
import ClockIcon from 'lucide-solid/icons/clock';
import { type Component, createSignal } from 'solid-js';

import { ResourcesPage } from '../../../private';

const DISABLED_TOGGLE_LABELS: ToggleActionLabels = {
	on: 'Disabled',
	off: 'Enabled',
};

export const InteractionsStatesPage: Component = () => {
	const [textValue, setTextValue] = createSignal('foo');
	const [rangeValue, setRangeValue] = createSignal(5);
	const [selectValue, setSelectValue] = createSignal('top');
	const [checkboxValue, setCheckboxValue] = createSignal(true);

	const [disabled, setDisabled] = createSignal(true);

	const $ = computedProps({
		disabled,
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
		<ResourcesPage title="States">
			<Surface variant="panel" role="toolbar" padding="xs" aria-labelledby={toolbarLabelId}>
				<Flex direction="row" align="center" gap="l" wrap>
					<Display level={3} variant="xs" id={toolbarLabelId}>
						Apply to all
					</Display>
					<Flex direction="row" gap="xs" wrap>
						<ToggleButton
							size="small"
							variant="secondary"
							value={disabled()}
							onPress={() => setDisabled(v => !v)}
							labels={DISABLED_TOGGLE_LABELS}
						/>
					</Flex>
				</Flex>
			</Surface>

			<Display level={3}>Button</Display>

			<Flex direction="column" gap="l" wrap>
				<Flex direction="row" align="center" gap="l" wrap>
					<Button variant="primary" intent="positive" {...$}>
						primary + positive
					</Button>
					<Button variant="primary" intent="negative" {...$}>
						primary + negative
					</Button>
					<Button variant="primary" intent="neutral" {...$}>
						primary + neutral
					</Button>
				</Flex>
				<Flex direction="row" align="center" gap="l" wrap>
					<Button variant="secondary" intent="positive" {...$}>
						secondary + positive
					</Button>
					<Button variant="secondary" intent="negative" {...$}>
						secondary + negative
					</Button>
					<Button variant="secondary" intent="neutral" {...$}>
						secondary + neutral
					</Button>
				</Flex>
				<Flex direction="row" align="center" gap="l" wrap>
					<Button variant="plain" intent="positive" {...$}>
						plain + positive
					</Button>
					<Button variant="plain" intent="negative" {...$}>
						plain + negative
					</Button>
					<Button variant="plain" intent="neutral" {...$}>
						plain + neutral
					</Button>
				</Flex>
			</Flex>

			<Display level={3}>Menu Item</Display>

			<Flex direction="column" gap="l" wrap>
				<Flex direction="row" align="center" gap="l" wrap>
					<Menu>
						<MenuItemAction variant="primary" intent="positive" label="primary + positive" />
						<MenuItemAction variant="primary" intent="negative" label="primary + negative" />
						<MenuItemAction variant="primary" intent="neutral" label="primary + neutral" />
					</Menu>
				</Flex>
				<Flex direction="row" align="center" gap="l" wrap>
					<Menu>
						<MenuItemAction variant="secondary" intent="positive" label="secondary + positive" />
						<MenuItemAction variant="secondary" intent="negative" label="secondary + negative" />
						<MenuItemAction variant="secondary" intent="neutral" label="secondary + neutral" />
					</Menu>
				</Flex>
				<Flex direction="row" align="center" gap="l" wrap>
					<Menu>
						<MenuItemAction variant="plain" intent="positive" label="plain + positive" />
						<MenuItemAction variant="plain" intent="negative" label="plain + negative" />
						<MenuItemAction variant="plain" intent="neutral" label="plain + neutral" />
					</Menu>
				</Flex>
			</Flex>

			<Display level={3}>Icon Button</Display>

			<Flex direction="column" gap="l" wrap>
				<Flex direction="row" align="center" gap="l" wrap>
					<IconButton
						icon={ClockIcon}
						label="primary + positive"
						variant="primary"
						intent="positive"
						{...$}
					/>
					<IconButton
						icon={ClockIcon}
						label="primary + negative"
						variant="primary"
						intent="negative"
						{...$}
					/>
					<IconButton
						icon={ClockIcon}
						label="primary + neutral"
						variant="primary"
						intent="neutral"
						{...$}
					/>
				</Flex>
				<Flex direction="row" align="center" gap="l" wrap>
					<IconButton
						icon={ClockIcon}
						label="secondary + positive"
						variant="secondary"
						intent="positive"
						{...$}
					/>
					<IconButton
						icon={ClockIcon}
						label="secondary + negative"
						variant="secondary"
						intent="negative"
						{...$}
					/>
					<IconButton
						icon={ClockIcon}
						label="secondary + neutral"
						variant="secondary"
						intent="neutral"
						{...$}
					/>
				</Flex>
				<Flex direction="row" align="center" gap="l" wrap>
					<IconButton
						icon={ClockIcon}
						label="plain + positive"
						variant="plain"
						intent="positive"
						{...$}
					/>
					<IconButton
						icon={ClockIcon}
						label="plain + negative"
						variant="plain"
						intent="negative"
						{...$}
					/>
					<IconButton
						icon={ClockIcon}
						label="plain + neutral"
						variant="plain"
						intent="neutral"
						{...$}
					/>
				</Flex>
			</Flex>

			<Display level={3}>Toggle Button</Display>

			<Flex direction="column" gap="l" wrap>
				<Flex direction="row" align="center" gap="l" wrap>
					<ToggleButton variant="primary" {...$} value={false} />
					<ToggleButton variant="primary" {...$} value={true} />
				</Flex>
				<Flex direction="row" align="center" gap="l" wrap>
					<ToggleButton variant="secondary" {...$} value={false} />
					<ToggleButton variant="secondary" {...$} value={true} />
				</Flex>
				<Flex direction="row" align="center" gap="l" wrap>
					<ToggleButton variant="plain" {...$} value={false} />
					<ToggleButton variant="plain" {...$} value={true} />
				</Flex>
			</Flex>

			<Display level={3}>Form Inputs</Display>

			<Flex direction="column" align="center" gap="l" wrap>
				<Checkbox size="m" checked={checkboxValue()} onValueChange={setCheckboxValue} {...$} />
				<TextInput value={textValue()} onValueChange={setTextValue} {...$} />
				<RangeInput value={String(rangeValue())} onValueChange={setRangeValue} {...$} />
				<Select value={selectValue()} onValueChange={setSelectValue} {...$}>
					{options()}
				</Select>
			</Flex>

			<Display level={3}>Segmented Input</Display>

			<Flex direction="row" align="center" gap="l" wrap>
				<SegmentedButton
					name="segemented-input-demo"
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
