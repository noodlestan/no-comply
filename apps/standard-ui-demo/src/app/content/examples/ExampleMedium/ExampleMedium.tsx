import {
	Button,
	Display,
	Flex,
	Icon,
	IconButton,
	Label,
	Link,
	Text,
	TextInput,
} from '@no-comply/standard-ui';
import LockIcon from 'lucide-solid/icons/lock';
import UnlockIcon from 'lucide-solid/icons/unlock';
import { type Component } from 'solid-js';

type Props = { title?: string };

export const ExampleMedium: Component<Props> = props => {
	return (
		<Flex gap="l" padding="l">
			<Flex gap="m">
				<Flex direction="row" align="center" gap="s">
					<Icon icon={LockIcon} />
					<Display level={3}>{props.title ?? 'Lorem Ipsum'}</Display>
				</Flex>
			</Flex>
			<Flex gap="s">
				<Label variant="small">Password</Label>
				<TextInput size="normal" length="m" value="password" type="password" />
			</Flex>
			<Flex direction="row" gap="m" align="center">
				<IconButton variant="primary" intent="negative" icon={LockIcon} label="Lock" />
				<Button variant="secondary">
					<Icon icon={UnlockIcon} />
					Unlock
				</Button>
			</Flex>
			<Text>
				Lorem ipsum dolor sit amet <Link href="#">Foobar</Link> elit. Nops{' '}
				<Link href="#" disabled>
					Nops
				</Link>{' '}
				nops!.
			</Text>
		</Flex>
	);
};
