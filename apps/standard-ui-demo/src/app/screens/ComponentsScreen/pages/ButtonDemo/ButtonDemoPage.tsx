import { staticClassList } from '@no-comply/solid-primitives';
import { Button, Flex, Icon } from '@no-comply/standard-ui';
import { UnlockIcon } from 'lucide-solid';
import { type Component } from 'solid-js';

import { findComponent } from '../../../../../data';
import { ComponentDemoPage, DemoItem, DemoSection } from '../../private';

import styles from './ButtonDemoPage.module.scss';

export const ButtonDemoPage: Component = () => {
    const handlePress = () => console.info('Click');

    const COMPONENT = findComponent('Button');

    return (
        <ComponentDemoPage
            component={COMPONENT}
            classList={staticClassList(styles, 'ButtonDemoPage')}
        >
            <DemoSection title="defaults">
                <DemoItem row title="label only">
                    <Button>View more items</Button>
                </DemoItem>
                <DemoItem row title="with icon">
                    <Button>
                        <Icon icon={UnlockIcon} size="small" />
                        Unlock items
                    </Button>
                </DemoItem>
            </DemoSection>

            <DemoSection title="variant">
                <DemoItem row title="primary" gap="l">
                    <Button variant="primary">Primary</Button>
                    <Button variant="primary" disabled>
                        Disabled
                    </Button>
                </DemoItem>
                <DemoItem row title="secondary" gap="l">
                    <Button variant="secondary">Secondary</Button>
                    <Button variant="secondary" disabled>
                        Disabled
                    </Button>
                </DemoItem>
                <DemoItem row title="plain" gap="l">
                    <Button variant="plain">Plain</Button>
                    <Button variant="plain" disabled>
                        Disabled
                    </Button>
                </DemoItem>
            </DemoSection>

            <DemoSection title="intent">
                <DemoItem title="positive" gap="l">
                    <Flex direction="row" gap="l">
                        <Button variant="primary" intent="positive">
                            Primary
                        </Button>
                        <Button variant="primary" intent="positive" disabled>
                            Disabled
                        </Button>
                    </Flex>
                    <Flex direction="row" gap="l">
                        <Button variant="secondary" intent="positive">
                            Secondary
                        </Button>
                        <Button variant="secondary" intent="positive" disabled>
                            Disabled
                        </Button>
                    </Flex>
                    <Flex direction="row" gap="l">
                        <Button variant="plain" intent="positive">
                            Plain
                        </Button>
                        <Button variant="plain" intent="positive" disabled>
                            Disabled
                        </Button>
                    </Flex>
                </DemoItem>
                <DemoItem title="negative" gap="l">
                    <Flex direction="row" gap="l">
                        <Button variant="primary" intent="negative">
                            Primary
                        </Button>
                        <Button variant="primary" intent="negative" disabled>
                            Disabled
                        </Button>
                    </Flex>
                    <Flex direction="row" gap="l">
                        <Button variant="secondary" intent="negative">
                            Secondary
                        </Button>
                        <Button variant="secondary" intent="negative" disabled>
                            Disabled
                        </Button>
                    </Flex>
                    <Flex direction="row" gap="l">
                        <Button variant="plain" intent="negative">
                            Plain
                        </Button>
                        <Button variant="plain" intent="negative" disabled>
                            Disabled
                        </Button>
                    </Flex>
                </DemoItem>
                <DemoItem title="neutral" gap="l">
                    <Flex direction="row" gap="l">
                        <Button variant="primary" intent="neutral">
                            Primary
                        </Button>
                        <Button variant="primary" intent="neutral" disabled>
                            Disabled
                        </Button>
                    </Flex>
                    <Flex direction="row" gap="l">
                        <Button variant="secondary" intent="neutral">
                            Secondary
                        </Button>
                        <Button variant="secondary" intent="neutral" disabled>
                            Disabled
                        </Button>
                    </Flex>
                    <Flex direction="row" gap="l">
                        <Button variant="plain" intent="neutral">
                            Plain
                        </Button>
                        <Button variant="plain" intent="neutral" disabled>
                            Disabled
                        </Button>
                    </Flex>
                </DemoItem>
            </DemoSection>

            <DemoSection title="size">
                <DemoItem row title="large">
                    <Button size="large">Size Large</Button>
                </DemoItem>
                <DemoItem row title="medium">
                    <Button size="medium">Size Medium</Button>
                </DemoItem>
                <DemoItem row title="normal">
                    <Button size="normal">Size Normal</Button>
                </DemoItem>
                <DemoItem row title="small">
                    <Button size="small">Size Small</Button>
                </DemoItem>
            </DemoSection>

            <DemoSection title="disabled">
                <DemoItem row title="">
                    <Button disabled>Disabled</Button>
                </DemoItem>
            </DemoSection>

            <DemoSection title="onPress">
                <DemoItem row note="see console log">
                    <Button onPress={handlePress}>Foobar</Button>
                </DemoItem>
            </DemoSection>

            <DemoSection title="classList">
                <DemoItem row note="Should override background color">
                    <Button classList={staticClassList(styles, 'override')}>Foobar</Button>
                </DemoItem>
            </DemoSection>
        </ComponentDemoPage>
    );
};
