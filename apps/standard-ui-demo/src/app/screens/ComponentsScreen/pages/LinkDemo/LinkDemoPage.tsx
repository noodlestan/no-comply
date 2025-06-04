import { Link, Text } from '@no-comply/standard-ui';
import { type Component } from 'solid-js';

import { findComponent } from '../../../../../data';
import { ComponentDemoPage, DemoItem, DemoSection } from '../../private';

export const LinkDemoPage: Component = () => {
    const handlePress = () => console.info('Press');

    const COMPONENT = findComponent('Link');

    return (
        <ComponentDemoPage component={COMPONENT}>
            <DemoSection title="defaults">
                <DemoItem>
                    <Text>
                        Lorem ipsum dolor sit amet, consectetur <Link href="#">Foobar</Link>{' '}
                        adipiscing elit. In sit amet tempor turpis. Pellentesque libero enim, semper
                        id sem a, gravida semper nisl. Duis fermentum faucibus est non porta.
                    </Text>
                </DemoItem>
            </DemoSection>

            <DemoSection title="href">
                <DemoItem>
                    <Text>
                        Lorem ipsum dolor sit amet, consectetur{' '}
                        <Link href="https://github.com/">Foobar</Link> adipiscing elit. In sit amet
                        tempor turpis. Pellentesque libero enim, semper id sem a, gravida semper
                        nisl. Duis fermentum faucibus est non porta.
                    </Text>
                </DemoItem>
            </DemoSection>

            <DemoSection title="disabled">
                <DemoItem title="true">
                    <Link href="#" disabled>
                        Foobar
                    </Link>
                </DemoItem>
            </DemoSection>

            <DemoSection title="onPress">
                <DemoItem note="See console log">
                    <Link href="#" onPress={handlePress}>
                        Foobar
                    </Link>
                </DemoItem>
            </DemoSection>
        </ComponentDemoPage>
    );
};
