import { Label } from '@no-comply/standard-ui';
import { type Component } from 'solid-js';

import { findComponent } from '../../../../../data';
import { ComponentDemoPage, DemoItem, DemoSection } from '../../private';

export const LabelDemoPage: Component = () => {
    const COMPONENT = findComponent('Label');

    return (
        <ComponentDemoPage component={COMPONENT}>
            <DemoSection title="defaults">
                <DemoItem>
                    <Label>Foobar</Label>
                </DemoItem>
            </DemoSection>

            <DemoSection title="variant">
                <DemoItem title="large">
                    <Label variant="large">Foobar</Label>
                </DemoItem>
                <DemoItem title="medium">
                    <Label variant="medium">Foobar</Label>
                </DemoItem>
                <DemoItem title="normal">
                    <Label variant="normal">Foobar</Label>
                </DemoItem>
                <DemoItem title="small">
                    <Label variant="small">Foobar</Label>
                </DemoItem>
            </DemoSection>
        </ComponentDemoPage>
    );
};
