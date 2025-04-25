import { staticClassList } from '@noodlestan/context-ui-primitives';
import { Link, Text } from '@noodlestan/standard-ui';
import { type Component } from 'solid-js';

import { findComponent } from '../../../../../data';
import { ComponentMeta, DemoGroup, DemoItem, DemoPage } from '../../../../components';

import styles from './LinkPage.module.css';

export const LinkPage: Component = () => {
    const handlePress = () => console.info('Press');

    const COMPONENT = findComponent('Link');

    return (
        <DemoPage title="Link" classList={staticClassList(styles, 'LinkPage')}>
            <ComponentMeta component={COMPONENT} />
            <DemoGroup title="defaults">
                <DemoItem>
                    <Text>
                        Lorem ipsum dolor sit amet, consectetur <Link href="#">Foobar</Link>{' '}
                        adipiscing elit. In sit amet tempor turpis. Pellentesque libero enim, semper
                        id sem a, gravida semper nisl. Duis fermentum faucibus est non porta.
                    </Text>
                </DemoItem>
            </DemoGroup>
            <DemoGroup title="href">
                <DemoItem>
                    <Text>
                        Lorem ipsum dolor sit amet, consectetur{' '}
                        <Link href="https://github.com/">Foobar</Link> adipiscing elit. In sit amet
                        tempor turpis. Pellentesque libero enim, semper id sem a, gravida semper
                        nisl. Duis fermentum faucibus est non porta.
                    </Text>
                </DemoItem>
            </DemoGroup>
            <DemoGroup title="disabled">
                <DemoItem title="true">
                    <Link href="#" disabled>
                        Foobar
                    </Link>
                </DemoItem>
            </DemoGroup>
            <DemoGroup title="onPress">
                <DemoItem note="See console log">
                    <Link href="#" onPress={handlePress}>
                        Foobar
                    </Link>
                </DemoItem>
            </DemoGroup>
            <DemoGroup title="classList">
                <DemoItem note="Should override text color">
                    <Link href="#" classList={{ override: true }}>
                        Foobar
                    </Link>
                </DemoItem>
            </DemoGroup>
        </DemoPage>
    );
};
