import { Button, Display, Flex, Icon, Link, Text } from '@no-comply/standard-ui';
import { ClockIcon, KeyIcon, LifeBuoyIcon, LockIcon } from 'lucide-solid';
import { type Component } from 'solid-js';

type Props = { title?: string };

export const ExampleTiny: Component<Props> = props => (
    <Flex padding="m" gap="m" direction="row" align="center">
        <Icon icon={ClockIcon} />
        <Display level={4}>{props.title ?? 'Lorem ipsum'}</Display>
        <Text variant="medium">
            <Link href="/">Home</Link>
        </Text>
        <Button variant="plain">
            <Icon icon={LifeBuoyIcon} />
            Help
        </Button>
        <Button>
            <Icon icon={LockIcon} />
            Signup
        </Button>
        <Button variant="primary" intent="positive">
            <Icon icon={KeyIcon} />
            Login
        </Button>
    </Flex>
);
