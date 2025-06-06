import { type ActionIntent, type ActionVariant, Flex, IconButton } from '@no-comply/standard-ui';
import { PlusIcon } from 'lucide-solid';
import type { JSX } from 'solid-js';

type Props = {
	variant: ActionVariant;
	intent?: ActionIntent;
};

function capitalize(s: string): string {
	return s.charAt(0).toUpperCase() + s.slice(1);
}
export const IconButtonVariantsExample = (props: Props): JSX.Element => (
	<>
		<Flex direction="row" gap="l">
			<IconButton
				icon={PlusIcon}
				variant={props.variant}
				intent={props.intent}
				label={capitalize(props.variant)}
			/>
			<IconButton
				icon={PlusIcon}
				variant={props.variant}
				intent={props.intent}
				label={capitalize(props.variant) + ' Disabled'}
				disabled
			/>
		</Flex>
	</>
);
