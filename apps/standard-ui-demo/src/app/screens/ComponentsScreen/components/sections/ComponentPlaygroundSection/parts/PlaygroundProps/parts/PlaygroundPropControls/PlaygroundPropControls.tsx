import { type Component } from 'solid-js';

import type { ComponentProp } from '../../../../../../../../../components';
import { PlaygroundResetButton } from '../../../PlaygroundResetButton';

type Props = {
	prop: ComponentProp;
	onResetProp: (name: string) => void;
};

// WIP conditionally show reset button

export const PlaygroundPropControls: Component<Props> = props => {
	const handleResetPropClick = () => props.onResetProp(props.prop.name);

	return (
		<PlaygroundResetButton
			iconOnly
			label="Reset prop to value from example"
			onPress={handleResetPropClick}
		/>
	);
};
