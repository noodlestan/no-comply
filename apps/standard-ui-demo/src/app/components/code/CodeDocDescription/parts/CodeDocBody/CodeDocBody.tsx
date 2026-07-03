import { type ContentSize, Text } from '@no-comply/standard-ui';
import { type Component, Show } from 'solid-js';

type Props = {
	size?: ContentSize;
	description?: string;
};

export const CodeDocBody: Component<Props> = props => {
	return (
		<Show when={props.description}>
			<Text size={props.size}>{props.description}</Text>
		</Show>
	);
};
