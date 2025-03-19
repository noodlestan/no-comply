import {
    Button,
    Display,
    Fieldset,
    Flex,
    Icon,
    IconButton,
    Label,
    Link,
    Surface,
    Text,
    TextInput,
} from '@noodlestan/ui-system';
import { ClockIcon, LockIcon } from 'lucide-solid';
import { Component } from 'solid-js';

import './ExampleLarge.css';

type ExampleLargeProps = {
    variant?: string;
    title?: string;
    nopadding?: boolean;
};

export const ExampleLargeHeader: Component<ExampleLargeProps> = props => (
    <Surface variant={props.variant || 'banner'} classList={{ ExampleLargeHeader: true }}>
        <Flex gap="s">
            <Flex direction="row" align="center" gap="m">
                <Icon size="m" icon={LockIcon} />
                <Display level={3}>{props.title || 'Lorem Ipsum'}</Display>
            </Flex>
            <Text>
                Lorem ipsum dolor sit amet, consectetur <Link href="#">Foobar</Link>
            </Text>
        </Flex>
    </Surface>
);

export const ExampleLargeBody: Component<ExampleLargeProps> = props => (
    <Surface variant={props.variant || 'page'} classList={{ ExampleLargeBody: true }}>
        <Flex gap="m">
            <Flex gap="m" direction="row" justify="between">
                <Display level={3}>Lorem ipsum dolor</Display>
                <IconButton variant="secondary" icon={LockIcon} />
            </Flex>
            <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sit amet tempor turpis.
                Pellentesque libero enim, semper id sem a, gravida semper nisl. Duis fermentum
                faucibus est non porta.
            </Text>
            <Flex gap="xl">
                <Fieldset label="Login">
                    <Flex gap="s">
                        <Label>Username</Label>
                        <TextInput size="m" value="username" />
                    </Flex>
                    <Flex gap="s">
                        <Label>Password</Label>
                        <TextInput size="m" value="password" type="password" />
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

export const ExampleLargeFooter: Component<ExampleLargeProps> = props => (
    <Surface variant={props.variant || 'inverse'} classList={{ ExampleLargeFooter: true }}>
        <Flex direction="row" align="center" gap="l">
            <Flex direction="row" align="center" gap="s">
                <Icon size="s" icon={ClockIcon} />
                <Text>Lorem ipsum dolor sit amet</Text>
                <Button size="s" variant="plain">
                    Plain
                </Button>
            </Flex>
        </Flex>
    </Surface>
);

export const ExampleLarge: Component<ExampleLargeProps> = props => (
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
