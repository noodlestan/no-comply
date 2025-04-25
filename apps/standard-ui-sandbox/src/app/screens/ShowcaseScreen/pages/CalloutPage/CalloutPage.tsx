import { staticClassList } from '@noodlestan/context-ui-primitives';
import { Callout } from '@noodlestan/standard-ui';
import { type Component } from 'solid-js';

import { findComponent } from '../../../../../data';
import { ComponentMeta, DemoGroup, DemoItem, DemoPage } from '../../../../components';

import styles from './CalloutPage.module.css';

export const CalloutPage: Component = () => {
    const COMPONENT = findComponent('Banner');

    return (
        <DemoPage title="Banner" classList={staticClassList(styles, 'CalloutPage')}>
            <ComponentMeta component={COMPONENT} />
            <DemoGroup title="defaults">
                <DemoItem>
                    <Callout>Hello</Callout>
                </DemoItem>
            </DemoGroup>
            <DemoGroup title="variant">
                <DemoItem title="passive">
                    <Callout variant="passive">Hello</Callout>
                </DemoItem>
                <DemoItem title="info">
                    <Callout variant="info">Hello</Callout>
                </DemoItem>
                <DemoItem title="warning">
                    <Callout variant="warning">Hello</Callout>
                </DemoItem>
                <DemoItem title="danger">
                    <Callout variant="danger">Hello</Callout>
                </DemoItem>
                <DemoItem title="success">
                    <Callout variant="success">Hello</Callout>
                </DemoItem>
            </DemoGroup>
            <DemoGroup title="size">
                <DemoItem title="m">
                    <Callout size="m">Hello</Callout>
                </DemoItem>
                <DemoItem title="s">
                    <Callout size="s">Hello</Callout>
                </DemoItem>
            </DemoGroup>
            <DemoGroup title="length">
                <DemoItem title="full">
                    <Callout length="full">Hello</Callout>
                </DemoItem>
                <DemoItem title="compact">
                    <Callout length="compact">Hello</Callout>
                </DemoItem>
            </DemoGroup>
            <DemoGroup title="classList">
                <DemoItem note="Should override border, background, and text color">
                    <Callout classList={{ override: true }}>Hello</Callout>
                </DemoItem>
            </DemoGroup>
        </DemoPage>
    );
};
