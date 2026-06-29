import {
	Button,
	Checkbox,
	Display,
	Flex,
	Icon,
	IconButton,
	SegmentedButton,
	SegmentedButtonItem,
	TextInput,
} from '@no-comply/standard-ui';
import ClockIcon from 'lucide-solid/icons/clock';
import { type Component, createSignal } from 'solid-js';

import { ResourcesPage } from '../../../private';

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
				<Icon size="normal" icon={ClockIcon} />
				<Button size="small">small</Button>
				<IconButton size="small" label="small" icon={ClockIcon} />
				<Checkbox size="xs" checked={checkboxValue()} onValueChange={setCheckboxValue} />
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
				<Button size="normal">normal</Button>
				<IconButton size="normal" label="normal" icon={ClockIcon} />
				<Checkbox size="s" checked={checkboxValue()} onValueChange={setCheckboxValue} />
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
				<Button size="medium">medium</Button>
				<IconButton size="medium" label="medium" icon={ClockIcon} />
				<Checkbox size="m" checked={checkboxValue()} onValueChange={setCheckboxValue} />
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
				<Button size="large">large</Button>
				<IconButton size="large" label="large" icon={ClockIcon} />
				<Checkbox size="l" checked={checkboxValue()} onValueChange={setCheckboxValue} />
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
