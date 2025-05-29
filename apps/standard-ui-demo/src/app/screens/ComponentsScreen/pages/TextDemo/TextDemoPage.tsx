import { staticClassList } from '@no-comply/solid-primitives';
import { Text } from '@no-comply/standard-ui';
import { type Component } from 'solid-js';

import { findComponent } from '../../../../../data';
import { DemoGroup, DemoItem } from '../../../../components';
import { ComponentDemoPage } from '../../private';

import styles from './TextDemoPage.module.scss';

export const TextDemoPage: Component = () => {
    const COMPONENT = findComponent('Text');

    return (
        <ComponentDemoPage
            component={COMPONENT}
            classList={staticClassList(styles, 'TextDemoPage')}
        >
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
                <DemoItem title="normal">
                    <Text variant="normal">
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

            <DemoGroup title="tag">
                <DemoItem note="Should render a <h1>">
                    <Text tag="h1">Foobar</Text>
                </DemoItem>
            </DemoGroup>

            <DemoGroup title="classList">
                <DemoItem note="Should override text color">
                    <Text classList={staticClassList(styles, 'override')}>Lorem ipsum</Text>
                </DemoItem>
            </DemoGroup>
        </ComponentDemoPage>
    );
};
