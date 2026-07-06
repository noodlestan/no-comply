import { type Component } from 'solid-js';

import type { ComponentProp } from '../../../../../../../../../../modules/props/components';
import { PlaygroundResetButton } from '../../../PlaygroundResetButton';

type Props = {
	prop: ComponentProp;
	resetEnabled: boolean;
	onResetProp: (name: string) => void;
};

export const PlaygroundPropControls: Component<Props> = props => {
	const handleResetPropClick = () => props.onResetProp(props.prop.name);

	return (
		<PlaygroundResetButton
			iconOnly
			disabled={!props.resetEnabled}
			label="Reset prop to value from example"
			onPress={handleResetPropClick}
		/>
	);
};
