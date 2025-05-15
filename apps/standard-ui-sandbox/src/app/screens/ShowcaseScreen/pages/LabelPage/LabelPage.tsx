import { staticClassList } from '@noodlestan/context-ui-primitives';
import { Label } from '@noodlestan/standard-ui';
import { type Component } from 'solid-js';

import { findComponent } from '../../../../../data';
import { ComponentMeta, DemoGroup, DemoItem } from '../../../../components';
import { DemoPage } from '../../../../templates';

import styles from './LabelPage.module.css';

export const LabelPage: Component = () => {
    const COMPONENT = findComponent('Label');

    return (
        <DemoPage title="Label" classList={staticClassList(styles, 'LabelPage')}>
            <ComponentMeta component={COMPONENT} />
            <DemoGroup title="defaults">
                <DemoItem>
                    <Label>Foobar</Label>
                </DemoItem>
            </DemoGroup>
            <DemoGroup title="variant">
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
            </DemoGroup>
            <DemoGroup title="classList">
                <DemoItem note="Should override text color">
                    <Label classList={staticClassList(styles, 'override')}>Foobar</Label>
                </DemoItem>
            </DemoGroup>
        </DemoPage>
    );
};
