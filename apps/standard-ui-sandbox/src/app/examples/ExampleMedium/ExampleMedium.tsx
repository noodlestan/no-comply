import { TextInput } from '@noodlestan/context-ui';
import {
    Button,
    Display,
    Flex,
    Icon,
    IconButton,
    Label,
    Link,
    Text,
} from '@noodlestan/standard-ui';
import { LockIcon, UnlockIcon } from 'lucide-solid';
import { type Component } from 'solid-js';

type ExampleMediumProps = { title: string };

export const ExampleMedium: Component<ExampleMediumProps> = props => {
    return (
        <Flex gap="l" padding="l">
            <Flex gap="m">
                <Flex direction="row" align="center">
                    <Icon size="s" icon={LockIcon} />
                    <Display level={3}>{props.title}</Display>
                </Flex>
            </Flex>
            <Flex gap="s">
                <Label variant="small">Password</Label>
                <TextInput size="s" length="m" value="password" type="password" />
            </Flex>
            <Flex direction="row" gap="m" align="center">
                <IconButton variant="primary" icon={LockIcon} />
                <IconButton variant="secondary" icon={UnlockIcon} />
                <Button variant="plain">Plain</Button>
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
