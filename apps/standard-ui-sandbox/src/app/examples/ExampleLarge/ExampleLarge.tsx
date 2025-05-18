import { TextInput } from '@noodlestan/context-ui';
import { shortId, staticClassList } from '@noodlestan/context-ui-primitives';
import {
    Button,
    Callout,
    Display,
    FieldLabel,
    Fieldset,
    Flex,
    Icon,
    IconButton,
    Link,
    Surface,
    Text,
} from '@noodlestan/standard-ui';
import { ClockIcon, LockIcon } from 'lucide-solid';
import { type Component, createSignal } from 'solid-js';

import styles from './ExampleLarge.module.css';

type ExampleLargeProps = {
    title?: string;
};

export const ExampleLargeHeader: Component<ExampleLargeProps> = props => {
    const labelId = shortId();

    return (
        <Flex gap="s">
            <Flex direction="row" align="center" gap="m">
                <Icon size="medium" icon={LockIcon} />
                <Display level={3} id={labelId}>
                    {props.title ?? 'Lorem Ipsum'}
                </Display>
            </Flex>
            <Text>
                Lorem ipsum dolor sit amet, consectetur <Link href="#">Foobar</Link>
            </Text>
        </Flex>
    );
};

export const ExampleLargeBody: Component<ExampleLargeProps> = () => {
    const labelId = shortId();

    const [username, setUsername] = createSignal('');
    const [password, setPassword] = createSignal('');

    return (
        <Flex gap="2xl">
            <Flex gap="m" direction="row" justify="between">
                <Display level={3} id={labelId}>
                    Lorem ipsum dolor
                </Display>
                <IconButton variant="secondary" icon={LockIcon} label="Lock" />
            </Flex>
            <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sit amet tempor turpis.
                Pellentesque libero enim, semper id sem a, gravida semper nisl. Duis fermentum
                faucibus est non porta.
            </Text>
            <Flex gap="xl">
                <Fieldset label="Login" size="large">
                    <Flex gap="m">
                        <FieldLabel for="username">Username</FieldLabel>
                        <TextInput
                            id="username"
                            size="m"
                            value={username()}
                            onChangeValue={setUsername}
                        />
                    </Flex>
                    <Flex gap="m">
                        <FieldLabel for="password">Password</FieldLabel>
                        <TextInput
                            id="password"
                            size="m"
                            value={password()}
                            onChangeValue={setPassword}
                        />
                    </Flex>
                </Fieldset>
                <Flex direction="row" gap="m" justify="end">
                    <Button>Cancel</Button>
                    <Button variant="primary" intent="positive">
                        Confirm
                    </Button>
                </Flex>
            </Flex>
        </Flex>
    );
};

export const ExampleLargeFooter: Component<ExampleLargeProps> = () => {
    const labelId = shortId();

    return (
        <Surface
            variant={'message'}
            classList={staticClassList(styles, 'ExampleLargeFooter')}
            labelledby={labelId}
        >
            <Flex direction="row" align="center" padding="m" gap="l">
                <Flex direction="row" align="center" gap="s">
                    <Icon size="small" icon={ClockIcon} />
                    <Text id={labelId}>Lorem ipsum dolor sit amet</Text>
                    <Button size="small" variant="plain">
                        Plain
                    </Button>
                </Flex>
            </Flex>
        </Surface>
    );
};

export const ExampleLarge: Component<ExampleLargeProps> = props => {
    return (
        <Flex direction="column" padding="xl" gap="xl">
            <Callout variant="success">{props.title}</Callout>
            <ExampleLargeHeader />
            <ExampleLargeBody />
        </Flex>
    );
};
