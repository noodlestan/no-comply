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
                        <Flex padding="l" direction="row" gap="s" align="center">
                            <ExampleTiny title="Foobar" />
                        </Flex>
                    </Surface>
                </Flex>
            </DemoGroup>
            <DemoGroup title="variant">
                <Flex gap="xl" classList={staticClassList(styles, 'SurfacePage--Variants')}>
                    <SurfaceVariantExample variant="page" onVariant="stage">
                        <ExampleLarge title="Foobar" />
                    </SurfaceVariantExample>
                    <SurfaceVariantExample variant="card" onVariant="page">
                        <ExampleMedium title="Foobar" />
                    </SurfaceVariantExample>
                    <SurfaceVariantExample variant="message" onVariant="page">
                        <ExampleMedium title="Foobar" />
                    </SurfaceVariantExample>
                    <SurfaceVariantExample variant="inverse" onVariant="stage">
                        <ExampleMedium title="Foobar" />
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
