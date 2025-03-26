import { Text } from '@noodlestan/context-ui';
import { type Component } from 'solid-js';

import { findComponent } from '../../../../../data';
import { ComponentMeta, DemoGroup, DemoItem, DemoPage } from '../../../../components';

import './TextPage.css';

export const TextPage: Component = () => {
    const COMPONENT = findComponent('Text');

    return (
        <DemoPage classList={{ TextPage: true }} title="Text">
            <ComponentMeta component={COMPONENT} />
            <DemoGroup title="defaults">
                <DemoItem>
                    <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
                </DemoItem>
            </DemoGroup>
            <DemoGroup title="size">
                <DemoItem title="l">
                    <Text size="l">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
                </DemoItem>
                <DemoItem title="m">
                    <Text size="m">
                        Sed tristique lectus dui, vitae viverra sapien semper a. In ut consectetur
                        nibh, eget posuere mauris. Suspendisse hendrerit quam tortor.
                    </Text>
                </DemoItem>
                <DemoItem title="s">
                    <Text size="s">
                        In sit amet tempor turpis. Pellentesque libero enim, semper id sem a,
                        gravida semper nisl. Duis fermentum faucibus est non porta. Nam scelerisque,
                        lectus sed pulvinar aliquet, nulla erat rutrum metus, a interdum arcu quam
                        vitae tellus. Proin aliquam orci at nunc egestas tempor. Donec vel ipsum
                        augue.
                    </Text>
                </DemoItem>
                <DemoItem title="xs">
                    <Text size="xs">
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
                <DemoItem note="Should render a <p>">
                    <Text tag="p">Foobar</Text>
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
