import { type ToggleActionIcons } from '@no-comply/solid-composables';
import { createIconValue } from '@no-comply/solid-primitives';
import { ToggleButton } from '@no-comply/standard-ui';
import List from 'lucide-solid/icons/list';
import ListCollapse from 'lucide-solid/icons/list-collapse';
import { type Component } from 'solid-js';

type Props = {
	value: boolean;
	onValueChange: (value: boolean) => void;
};

const ICONS: ToggleActionIcons = {
	on: createIconValue(List),
	off: createIconValue(ListCollapse),
};

export const ToggleGroupProps: Component<Props> = props => {
	return (
		<ToggleButton
			size="small"
			value={props.value}
			icons={ICONS}
			labels="Group Props"
			aria-label="Toggle Group Props"
			onPress={() => props.onValueChange(!props.value)}
		/>
	);
};

// <button {...$}>
// 	<AlignFirstLine height="xs" type="label" variant="small">
// 		<Flex direction="row" gap="xs" align="start" tag="span" classList={layoutClassList}>
// 			<Icon {..._icon} />
// 			<LabelAligned for={id}>{_icon.label}</LabelAligned>
// 			{/* <Checkbox id={id} checked={props.value} onValueChange={props.onValueChange} /> */}
// 		</Flex>
// 	</AlignFirstLine>
// </button>
