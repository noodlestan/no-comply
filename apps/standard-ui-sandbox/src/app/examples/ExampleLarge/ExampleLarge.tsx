import { TextInput } from '@noodlestan/context-ui';
import { shortId, staticClassList } from '@noodlestan/context-ui-primitives';
import {
    Button,
    Display,
    FieldLabel,
    Fieldset,
    Flex,
    Icon,
    IconButton,
    Link,
    Surface,
    type SurfaceVariant,
    Text,
} from '@noodlestan/standard-ui';
import { ClockIcon, LockIcon } from 'lucide-solid';
import { type Component, createSignal } from 'solid-js';

import styles from './ExampleLarge.module.css';

type ExampleLargeProps = {
    variant?: SurfaceVariant;
    title?: string;
    nopadding?: boolean;
};

export const ExampleLargeHeader: Component<ExampleLargeProps> = props => {
    const labelId = shortId();

    const variant = () => props.variant ?? ('card' as SurfaceVariant);

    return (
        <Surface
            variant={variant()}
            classList={staticClassList(styles, 'ExampleLargeHeader')}
            labelledby={labelId}
        >
            <Flex gap="s">
                <Flex direction="row" align="center" gap="m">
                    <Icon size="m" icon={LockIcon} />
                    <Display level={3} id={labelId}>
                        {props.title ?? 'Lorem Ipsum'}
                    </Display>
                </Flex>
                <Text>
                    Lorem ipsum dolor sit amet, consectetur <Link href="#">Foobar</Link>
                </Text>
            </Flex>
        </Surface>
    );
};

export const ExampleLargeBody: Component<ExampleLargeProps> = props => {
    const labelId = shortId();

    const variant = () => props.variant ?? ('page' as SurfaceVariant);

    const [username, setUsername] = createSignal('');
    const [password, setPassword] = createSignal('');

    return (
        <Surface
            variant={variant()}
            classList={staticClassList(styles, 'ExampleLargeBody')}
            labelledby={labelId}
        >
            <Flex gap="m">
                <Flex gap="m" direction="row" justify="between">
                    <Display level={3} id={labelId}>
                        Lorem ipsum dolor
                    </Display>
                    <IconButton variant="secondary" icon={LockIcon} />
                </Flex>
                <Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sit amet tempor
                    turpis. Pellentesque libero enim, semper id sem a, gravida semper nisl. Duis
                    fermentum faucibus est non porta.
                </Text>
                <Flex gap="xl">
                    <Fieldset label="Login">
                        <Flex gap="s">
                            <FieldLabel for="username">Username</FieldLabel>
                            <TextInput
                                id="username"
                                size="m"
                                value={username()}
                                onChangeValue={setUsername}
                            />
                        </Flex>
                        <Flex gap="s">
                            <FieldLabel for="password">Password</FieldLabel>
                            <TextInput
                                id="password"
                                size="m"
                                value={password()}
                                onChangeValue={setPassword}
                            />
                        </Flex>
                    </Fieldset>
                    <Flex direction="row" gap="m">
                        <Button>Primary</Button>
                        <Button variant="secondary">Secondary</Button>
                    </Flex>
                </Flex>
            </Flex>
        </Surface>
    );
};

export const ExampleLargeFooter: Component<ExampleLargeProps> = props => {
    const labelId = shortId();

    const variant = () => props.variant ?? ('inverse' as SurfaceVariant);

    return (
        <Surface
            variant={variant()}
            classList={staticClassList(styles, 'ExampleLargeFooter')}
            labelledby={labelId}
        >
            <Flex direction="row" align="center" gap="l">
                <Flex direction="row" align="center" gap="s">
                    <Icon size="s" icon={ClockIcon} />
                    <Text id={labelId}>Lorem ipsum dolor sit amet</Text>
                    <Button size="s" variant="plain">
                        Plain
                    </Button>
                </Flex>
            </Flex>
        </Surface>
    );
};

export const ExampleLarge: Component<ExampleLargeProps> = props => {
    return (
        <Flex
            direction="column"
            padding={props.nopadding ? 'none' : 'xl'}
            classList={{ ExampleLarge: true }}
        >
            <ExampleLargeHeader {...props} />
            <ExampleLargeBody {...props} />
            <ExampleLargeFooter {...props} />
        </Flex>
    );
};
