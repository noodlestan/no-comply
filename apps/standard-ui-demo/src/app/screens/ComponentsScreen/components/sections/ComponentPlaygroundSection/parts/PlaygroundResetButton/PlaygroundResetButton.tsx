import { Button, Icon, IconButton, type IconButtonProps } from '@no-comply/standard-ui';
import ResetIcon from 'lucide-solid/icons/undo-2';
import { type Component } from 'solid-js';

type Props = {
	onPress: () => void;
	label: string;
	iconOnly?: boolean;
	size?: IconButtonProps['size'];
};

export const PlaygroundResetButton: Component<Props> = props => {
	const size = () => props.size || 'small';

	return (
		<>
			{props.iconOnly ? (
				<IconButton size={size()} icon={ResetIcon} label={props.label} onPress={props.onPress} />
			) : (
				<Button onPress={props.onPress}>
					<Icon icon={ResetIcon} size="small" />
					{props.label}
				</Button>
			)}
		</>
	);
};
