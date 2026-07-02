import { Button, Display, Flex, Icon, Link, Text } from '@no-comply/standard-ui';
import ClockIcon from 'lucide-solid/icons/clock';
import KeyIcon from 'lucide-solid/icons/key';
import LockIcon from 'lucide-solid/icons/lock';
import { type Component } from 'solid-js';

type Props = { title?: string };

export const ExampleTiny: Component<Props> = props => (
	<Flex padding="m" gap="l" direction="row" justify="between" wrap>
		<Flex gap="l" direction="row" align="center" wrap>
			<Flex gap="s" direction="row" align="center" wrap>
				<Icon icon={ClockIcon} />
				<Display level={4}>{props.title ?? 'Lorem ipsum'}</Display>
			</Flex>
			<Flex gap="m" direction="row" align="center" wrap>
				<Text size="medium">
					<Link href="/">Home</Link>
				</Text>
				<Text size="medium">
					<Link href="/">About</Link>
				</Text>
			</Flex>
		</Flex>
		<Flex gap="m" direction="row" align="center" wrap>
			<Button variant="plain">Help</Button>
			<Button>
				<Icon icon={LockIcon} />
				Signup
			</Button>
			<Button variant="primary" intent="positive">
				<Icon icon={KeyIcon} />
				Login
			</Button>
		</Flex>
	</Flex>
);
