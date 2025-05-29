import { Button, Display, Flex, Icon, Link, Text } from '@no-comply/standard-ui';
import { ClockIcon } from 'lucide-solid';
import { type Component } from 'solid-js';

type Props = { title: string };

export const ExampleSmall: Component<Props> = props => {
    return (
        <Flex direction="column" gap="l" padding="m">
            <Flex gap="m">
                <Flex direction="row" align="center" gap="s">
                    <Icon size="small" icon={ClockIcon} />
                    <Display level={3}>{props.title}</Display>
                </Flex>
                <Text>
                    Lorem ipsum dolor sit amet <Link href="#">Foobar</Link> elit.
                </Text>
            </Flex>
            <Flex direction="row" align="center" justify="end" gap="l">
                <Button variant="secondary">Secondary</Button>
                <Button variant="plain">Plain</Button>
            </Flex>
        </Flex>
    );
};
