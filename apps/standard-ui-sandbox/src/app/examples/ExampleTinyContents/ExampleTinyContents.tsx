import { Button, Display, Icon, Link, Text } from '@noodlestan/standard-ui';
import { ClockIcon, KeyIcon, LifeBuoyIcon, LockIcon } from 'lucide-solid';
import { type Component } from 'solid-js';

type Props = { title?: string };

export const ExampleTinyContents: Component<Props> = props => (
    <>
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
        <Button variant="primary">
            <Icon icon={KeyIcon} />
            Login
        </Button>
    </>
);
