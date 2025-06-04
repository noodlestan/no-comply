import { Flex, Label, Surface } from '@no-comply/standard-ui';
import { type Component } from 'solid-js';

import { findComponent } from '../../../../../data';
import { ExampleLarge, ExampleMedium, ExampleSmall, ExampleTiny } from '../../../../examples';
import { ComponentDemoPage, DemoSection } from '../../private';

import { SurfaceVariantExample } from './private';

export const SurfaceDemoPage: Component = () => {
    const COMPONENT = findComponent('Surface');

    return (
        <ComponentDemoPage component={COMPONENT}>
            <DemoSection title="defaults">
                <Flex gap="s">
                    <Label>stage</Label>
                    <Surface variant="stage">
                        <ExampleTiny title="Foobar" />
                    </Surface>
                </Flex>
            </DemoSection>

            <DemoSection title="variant">
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
            </DemoSection>

            <DemoSection title="tag">
                <Flex gap="s">
                    <Surface variant="card" tag="section">
                        <ExampleSmall title="Foobar" />
                    </Surface>
                </Flex>
            </DemoSection>

            <DemoSection title="disabled">
                <Surface variant="card" disabled>
                    <ExampleSmall title="Foobar" />
                </Surface>
            </DemoSection>
        </ComponentDemoPage>
    );
};
