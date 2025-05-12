import { staticClassList } from '@noodlestan/context-ui-primitives';
import { Flex, Label, Surface, Text } from '@noodlestan/standard-ui';
import { type Component } from 'solid-js';

import { findComponent } from '../../../../../data';
import { ComponentMeta, DemoGroup, DemoPage, SurfaceVariantExample } from '../../../../components';
import { ExampleLarge, ExampleMedium, ExampleSmall, ExampleTiny } from '../../../../examples';

import styles from './SurfacePage.module.css';

export const SurfacePage: Component = () => {
    const COMPONENT = findComponent('Surface');

    return (
        <DemoPage title="Surface" classList={staticClassList(styles, 'SurfacePage')}>
            <ComponentMeta component={COMPONENT} />
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
                    <SurfaceVariantExample variant="message" onVariant="page">
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
        </DemoPage>
    );
};
