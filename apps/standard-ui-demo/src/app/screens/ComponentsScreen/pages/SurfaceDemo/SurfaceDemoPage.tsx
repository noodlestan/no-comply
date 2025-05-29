import { staticClassList } from '@no-comply/solid-primitives';
import { Flex, Label, Surface, Text } from '@no-comply/standard-ui';
import { type Component } from 'solid-js';

import { findComponent } from '../../../../../data';
import { DemoGroup, SurfaceVariantExample } from '../../../../components';
import { ExampleLarge, ExampleMedium, ExampleSmall, ExampleTiny } from '../../../../examples';
import { ComponentDemoPage } from '../../private';

import styles from './SurfaceDemoPage.module.scss';

export const SurfaceDemoPage: Component = () => {
    const COMPONENT = findComponent('Surface');

    return (
        <ComponentDemoPage
            component={COMPONENT}
            classList={staticClassList(styles, 'SurfaceDemoPage')}
        >
            <DemoGroup title="defaults">
                <Flex gap="s">
                    <Label>stage</Label>
                    <Surface variant="stage">
                        <ExampleTiny title="Foobar" />
                    </Surface>
                </Flex>
            </DemoGroup>

            <DemoGroup title="variant">
                <Flex gap="xl">
                    <SurfaceVariantExample variant="page" onVariant="stage">
                        <ExampleLarge title="Page" />
                    </SurfaceVariantExample>
                    <SurfaceVariantExample variant="panel" onVariant="stage">
                        <ExampleTiny title="Panel" />
                    </SurfaceVariantExample>
                    <SurfaceVariantExample variant="panel" onVariant="page">
                        <ExampleTiny title="Panel" />
                    </SurfaceVariantExample>
                    <SurfaceVariantExample variant="card" onVariant="stage">
                        <ExampleMedium title="Card" />
                    </SurfaceVariantExample>
                    <SurfaceVariantExample variant="card" onVariant="page">
                        <ExampleMedium title="Card" />
                    </SurfaceVariantExample>
                    <SurfaceVariantExample variant="message" onVariant="page" data-message="info">
                        <ExampleMedium title="Message" />
                    </SurfaceVariantExample>
                    <SurfaceVariantExample variant="inverse" onVariant="stage">
                        <ExampleMedium title="Inverse" />
                    </SurfaceVariantExample>
                    <SurfaceVariantExample variant="inverse" onVariant="page">
                        <ExampleMedium title="Inverse" />
                    </SurfaceVariantExample>
                </Flex>
            </DemoGroup>

            <DemoGroup title="tag">
                <Flex gap="s">
                    <Surface variant="card" tag="section">
                        <ExampleSmall title="Foobar" />
                    </Surface>
                </Flex>
            </DemoGroup>

            <DemoGroup title="disabled">
                <Surface variant="card" disabled>
                    <ExampleSmall title="Foobar" />
                </Surface>
            </DemoGroup>

            <DemoGroup title="classList">
                <Surface variant="card" classList={staticClassList(styles, 'override')}>
                    <ExampleSmall title="Foobar" />
                </Surface>
                <Text variant="small">Should override text color</Text>
            </DemoGroup>
        </ComponentDemoPage>
    );
};
