import { staticClassList } from '@noodlestan/context-ui-primitives';
import { Label } from '@noodlestan/standard-ui';
import { type Component } from 'solid-js';

import { findComponent } from '../../../../../data';
import { DemoGroup, DemoItem } from '../../../../components';
import { ComponentDemoPage } from '../../private';

import styles from './LabelDemoPage.module.scss';

export const LabelDemoPage: Component = () => {
    const COMPONENT = findComponent('Label');

    return (
        <ComponentDemoPage
            component={COMPONENT}
            classList={staticClassList(styles, 'LabelDemoPage')}
        >
            <DemoGroup title="defaults">
                <DemoItem>
                    <Label>Foobar</Label>
                </DemoItem>
            </DemoGroup>

            <DemoGroup title="variant">
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
            </DemoGroup>

            <DemoGroup title="classList">
                <DemoItem note="Should override text color">
                    <Label classList={staticClassList(styles, 'override')}>Foobar</Label>
                </DemoItem>
            </DemoGroup>
        </ComponentDemoPage>
    );
};
