import { type ToggleActionIcons } from '@no-comply/solid-composables';
import { createIconValue } from '@no-comply/solid-primitives';
import { ToggleButton } from '@no-comply/standard-ui';
import Eye from 'lucide-solid/icons/eye';
import EyeOff from 'lucide-solid/icons/eye-off';
import { type Component } from 'solid-js';

type Props = {
	value: boolean;
	onValueChange: (value: boolean) => void;
};

const ICONS: ToggleActionIcons = {
	on: createIconValue(Eye),
	off: createIconValue(EyeOff),
};

export const ToggleShowDocs: Component<Props> = props => {
	return (
		<ToggleButton
			size="small"
			value={props.value}
			icons={ICONS}
			labels="Show Docs"
			aria-label="Toggle Show Docs"
			onPress={() => props.onValueChange(!props.value)}
		/>
	);
};
