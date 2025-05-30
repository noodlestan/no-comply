import { staticClassList } from '@no-comply/solid-primitives';
import { Label } from '@no-comply/standard-ui';
import { type Component } from 'solid-js';

import { findComponent } from '../../../../../data';
import { ComponentDemoPage, DemoItem, DemoSection } from '../../private';

import styles from './LabelDemoPage.module.scss';

export const LabelDemoPage: Component = () => {
    const COMPONENT = findComponent('Label');

    return (
        <ComponentDemoPage
            component={COMPONENT}
            classList={staticClassList(styles, 'LabelDemoPage')}
        >
            <DemoSection title="defaults">
                <DemoItem>
                    <Label>Foobar</Label>
                </DemoItem>
            </DemoSection>

            <DemoSection title="variant">
                <DemoItem title="large">
                    <Label size="large">Foobar</Label>
                </DemoItem>
                <DemoItem title="medium">
                    <Label size="medium">Foobar</Label>
                </DemoItem>
                <DemoItem title="normal">
                    <Label size="normal">Foobar</Label>
                </DemoItem>
                <DemoItem title="small">
                    <Label size="small">Foobar</Label>
                </DemoItem>
            </DemoSection>

            <DemoSection title="classList">
                <DemoItem note="Should override text color">
                    <Label classList={staticClassList(styles, 'override')}>Foobar</Label>
                </DemoItem>
            </DemoSection>
        </ComponentDemoPage>
    );
};
