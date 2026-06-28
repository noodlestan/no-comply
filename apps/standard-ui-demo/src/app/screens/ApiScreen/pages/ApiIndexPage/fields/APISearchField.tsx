import type { BaseInputProps } from '@no-comply/solid-composables';
import { Field, Flex, Icon, IconButton, TextInput } from '@no-comply/standard-ui';
import SearchIcon from 'lucide-solid/icons/search';
import XIcon from 'lucide-solid/icons/x';
import { type Component, Show } from 'solid-js';

type Props = BaseInputProps<string>;

export const APISearchField: Component<Props> = props => {
	const handleClearClick = () => props.onValueChange?.('');
	return (
		<Field size="medium" label="Search terms" required>
			{({ field }) => (
				<Flex direction="row" gap="s" align="center">
					<Icon icon={SearchIcon} />
					<TextInput
						length="full"
						size="medium"
						value={props.value}
						onValueChange={props.onValueChange}
						{...field.$input}
					/>
					<Show when={props.value}>
						<IconButton icon={XIcon} onPress={handleClearClick} label="Clear search terms" />
					</Show>
				</Flex>
			)}
		</Field>
	);
};
