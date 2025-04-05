import { staticClassList } from '@noodlestan/context-ui-types';
import { Text } from '@noodlestan/standard-ui';
import { type Component } from 'solid-js';

import { findComponent } from '../../../../../data';
import { ComponentMeta, DemoGroup, DemoItem, DemoPage } from '../../../../components';

import styles from './TextPage.module.css';

export const TextPage: Component = () => {
    const COMPONENT = findComponent('Text');

    return (
        <DemoPage title="Text" classList={staticClassList(styles, 'TextPage')}>
            <ComponentMeta component={COMPONENT} />
            <DemoGroup title="defaults">
                <DemoItem>
                    <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
                </DemoItem>
            </DemoGroup>
            <DemoGroup title="variant">
                <DemoItem title="large">
                    <Text variant="large">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </Text>
                </DemoItem>
                <DemoItem title="medium">
                    <Text variant="medium">
                        Sed tristique lectus dui, vitae viverra sapien semper a. In ut consectetur
                        nibh, eget posuere mauris. Suspendisse hendrerit quam tortor.
                    </Text>
                </DemoItem>
                <DemoItem title="default">
                    <Text variant="default">
                        In sit amet tempor turpis. Pellentesque libero enim, semper id sem a,
                        gravida semper nisl. Duis fermentum faucibus est non porta. Nam scelerisque,
                        lectus sed pulvinar aliquet, nulla erat rutrum metus, a interdum arcu quam
                        vitae tellus. Proin aliquam orci at nunc egestas tempor. Donec vel ipsum
                        augue.
                    </Text>
                </DemoItem>
                <DemoItem title="small">
                    <Text variant="small">
                        Vestibulum ultricies molestie tellus, vitae elementum ipsum tempor quis.
                        Pellentesque faucibus, ipsum eu euismod accumsan, ipsum sapien.
                    </Text>
                </DemoItem>
            </DemoGroup>
            <DemoGroup title="color">
                <DemoItem title="auto">
                    <Text color="auto">Lorem ipsum dolor sit amet, consectetur.</Text>
                </DemoItem>
                <DemoItem title="primary">
                    <Text color="primary">Lorem ipsum dolor sit amet, consectetur.</Text>
                </DemoItem>
                <DemoItem title="focused">
                    <Text color="focused">Lorem ipsum dolor sit amet, consectetur.</Text>
                </DemoItem>
                <DemoItem title="modified">
                    <Text color="modified">Lorem ipsum dolor sit amet, consectetur.</Text>
                </DemoItem>
                <DemoItem title="selected">
                    <Text color="selected">Lorem ipsum dolor sit amet, consectetur.</Text>
                </DemoItem>
                <DemoItem title="muted">
                    <Text color="muted">Lorem ipsum dolor sit amet, consectetur.</Text>
                </DemoItem>
                <DemoItem title="neutral">
                    <Text color="neutral">Lorem ipsum dolor sit amet, consectetur.</Text>
                </DemoItem>
                <DemoItem title="good">
                    <Text color="good">Lorem ipsum dolor sit amet, consectetur.</Text>
                </DemoItem>
                <DemoItem title="meh">
                    <Text color="meh">Lorem ipsum dolor sit amet, consectetur.</Text>
                </DemoItem>
                <DemoItem title="bad">
                    <Text color="bad">Lorem ipsum dolor sit amet, consectetur.</Text>
                </DemoItem>
            </DemoGroup>
            <DemoGroup title="tag">
                <DemoItem note="Should render a <h1>">
                    <Text component="h1">Foobar</Text>
                </DemoItem>
            </DemoGroup>
            <DemoGroup title="classList">
                <DemoItem note="Should override text color">
                    <Text classList={{ override: true }}>Lorem ipsum</Text>
                </DemoItem>
            </DemoGroup>
        </DemoPage>
    );
};
