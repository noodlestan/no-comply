import {
	Button,
	Checkbox,
	Display,
	Flex,
	Icon,
	IconButton,
	NavLink,
	SegmentedButton,
	SegmentedButtonItem,
	TextInput,
	ToggleButton,
} from '@no-comply/standard-ui';
import ClockIcon from 'lucide-solid/icons/clock';
import { type Component, createSignal } from 'solid-js';

import { ResourcesPage } from '../../../private';

const LABELS = { on: 'On', off: 'Off' };

export const ContentSizePage: Component = () => {
	const [textValue, setTextValue] = createSignal('foo');
	const [selectValue, setSelectValue] = createSignal('middle');
	const [checkboxValue, setCheckboxValue] = createSignal(true);

	const buttonItems = () => (
		<>
			<SegmentedButtonItem value="top">top</SegmentedButtonItem>
			<SegmentedButtonItem value="middle">middle</SegmentedButtonItem>
			<SegmentedButtonItem value="bottom">bottom</SegmentedButtonItem>
		</>
	);

	return (
		<ResourcesPage title="Content Size">
			<Display level={3}>small</Display>

			<Flex direction="row" align="center" gap="l" wrap>
				<Icon size="small" icon={ClockIcon} />
				<Icon size="normal" icon={ClockIcon} />
				<NavLink current href="/" size="small">
					Small
				</NavLink>
				<Button size="small">small</Button>
				<ToggleButton size="small" variant="secondary" value={true} labels={LABELS} />
				<IconButton size="small" label="small" icon={ClockIcon} />
				<Checkbox size="small" checked={checkboxValue()} onValueChange={setCheckboxValue} />
				<TextInput length="s" size="small" value={textValue()} onValueChange={setTextValue} />
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

			<Flex direction="row" align="center" gap="l" wrap>
				<Icon size="medium" icon={ClockIcon} />
				<NavLink current href="/" size="normal">
					Normal
				</NavLink>
				<Button size="normal">normal</Button>
				<ToggleButton size="normal" variant="secondary" value={true} labels={LABELS} />
				<IconButton size="normal" label="normal" icon={ClockIcon} />
				<Checkbox size="normal" checked={checkboxValue()} onValueChange={setCheckboxValue} />
				<TextInput length="s" size="normal" value={textValue()} onValueChange={setTextValue} />
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

			<Flex direction="row" align="center" gap="l" wrap>
				<Icon size="large" icon={ClockIcon} />
				<NavLink current href="/" size="medium">
					Medium
				</NavLink>
				<Button size="medium">medium</Button>
				<ToggleButton size="medium" variant="secondary" value={true} labels={LABELS} />
				<IconButton size="medium" label="medium" icon={ClockIcon} />
				<Checkbox size="medium" checked={checkboxValue()} onValueChange={setCheckboxValue} />
				<TextInput length="s" size="medium" value={textValue()} onValueChange={setTextValue} />
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

			<Flex direction="row" align="center" gap="l" wrap>
				<Icon size="large" icon={ClockIcon} />
				<NavLink current href="/" size="large">
					Large
				</NavLink>
				<Button size="large">large</Button>
				<ToggleButton size="large" variant="secondary" value={true} labels={LABELS} />
				<IconButton size="large" label="large" icon={ClockIcon} />
				<Checkbox size="large" checked={checkboxValue()} onValueChange={setCheckboxValue} />
				<TextInput length="s" size="large" value={textValue()} onValueChange={setTextValue} />
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
