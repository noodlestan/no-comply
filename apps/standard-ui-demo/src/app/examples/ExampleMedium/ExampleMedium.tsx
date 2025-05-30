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
import { LockIcon, UnlockIcon } from 'lucide-solid';
import { type Component } from 'solid-js';

type Props = { title: string };

export const ExampleMedium: Component<Props> = props => {
    return (
        <Flex gap="l" padding="l">
            <Flex gap="m">
                <Flex direction="row" align="center" gap="s">
                    <Icon icon={LockIcon} />
                    <Display level={3}>{props.title}</Display>
                </Flex>
            </Flex>
            <Flex gap="s">
                <Label size="small">Password</Label>
                <TextInput size="s" length="m" value="password" type="password" />
            </Flex>
            <Flex direction="row" gap="m" align="center">
                <IconButton variant="primary" intent="positive" icon={LockIcon} label="Lock" />
                <IconButton variant="secondary" icon={UnlockIcon} label="unlock" />
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
