import { Label } from '@noodlestan/context-ui';
import { type Component } from 'solid-js';

import { findComponent } from '../../../../../data';
import { ComponentMeta, DemoGroup, DemoItem, DemoPage } from '../../../../components';

import './LabelPage.css';

export const LabelPage: Component = () => {
    const COMPONENT = findComponent('Label');

    return (
        <DemoPage classList={{ LabelPage: true }} title="Label">
            <ComponentMeta component={COMPONENT} />
            <DemoGroup title="defaults">
                <DemoItem>
                    <Label>Foobar</Label>
                </DemoItem>
            </DemoGroup>
            <DemoGroup title="size">
                <DemoItem title="l">
                    <Label size="l">Foobar</Label>
                </DemoItem>
                <DemoItem title="m">
                    <Label size="m">Foobar</Label>
                </DemoItem>
                <DemoItem title="s">
                    <Label size="s">Foobar</Label>
                </DemoItem>
            </DemoGroup>
            <DemoGroup title="for">
                <DemoItem>
                    <Label for="foobar-id">Foobar</Label>
                </DemoItem>
            </DemoGroup>
            <DemoGroup title="classList">
                <DemoItem note="Should override text color">
                    <Label classList={{ override: true }}>Foobar</Label>
                </DemoItem>
            </DemoGroup>
        </DemoPage>
    );
};
