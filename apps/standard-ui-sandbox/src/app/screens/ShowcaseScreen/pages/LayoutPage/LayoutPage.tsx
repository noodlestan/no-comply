import { staticClassList } from '@noodlestan/context-ui-primitives';
import { Display, Layout } from '@noodlestan/standard-ui';
import { type Component } from 'solid-js';

import { findComponent } from '../../../../../data';
import { ComponentMeta, DemoGroup, DemoItem, DemoPage } from '../../../../components';
import { ExampleTiny } from '../../../../examples';

import styles from './LayoutPage.module.css';

export const LayoutPage: Component = () => {
    const COMPONENT = findComponent('Layout');

    return (
        <DemoPage title="Layout" classList={staticClassList(styles, 'LayoutPage')}>
            <ComponentMeta component={COMPONENT} />
            <DemoGroup title="defaults">
                <DemoItem>
                    <Layout>
                        <ExampleTiny />
                    </Layout>
                </DemoItem>
            </DemoGroup>
            <DemoGroup
                title="stretch"
                classList={staticClassList(styles, 'LayoutPage--StretchDemo')}
            >
                <DemoItem title="full">
                    <Layout stretch="full">
                        <ExampleTiny />
                    </Layout>
                </DemoItem>
                <DemoItem title="width">
                    <Layout stretch="width">
                        <ExampleTiny />
                    </Layout>
                </DemoItem>
                <DemoItem title="height">
                    <Layout stretch="height">
                        <ExampleTiny />
                    </Layout>
                </DemoItem>
            </DemoGroup>
            <DemoGroup
                title="overflow"
                classList={staticClassList(styles, 'LayoutPage--StretchDemo')}
            >
                <DemoItem title="auto">
                    <Layout overflow="auto">
                        <ExampleTiny />
                    </Layout>
                </DemoItem>
                <DemoItem title="x-auto">
                    <Layout overflow="x-auto">
                        <ExampleTiny />
                    </Layout>
                </DemoItem>
                <DemoItem title="y-auto">
                    <Layout overflow="y-auto">
                        <ExampleTiny />
                    </Layout>
                </DemoItem>
                <DemoItem title="overflow-y">
                    <Layout overflow="hidden">
                        <ExampleTiny />
                    </Layout>
                </DemoItem>
            </DemoGroup>
            <DemoGroup title="padding">
                <DemoItem title="none">
                    <Layout>
                        <Display level={4}>Lorem ipsum</Display>
                    </Layout>
                </DemoItem>
                <DemoItem title="s">
                    <Layout padding="s">
                        <Display level={4}>Lorem ipsum</Display>
                    </Layout>
                </DemoItem>
                <DemoItem title="m">
                    <Layout padding="m">
                        <Display level={4}>Lorem ipsum</Display>
                    </Layout>
                </DemoItem>
                <DemoItem title="l">
                    <Layout padding="l">
                        <Display level={4}>Lorem ipsum</Display>
                    </Layout>
                </DemoItem>
            </DemoGroup>
            <DemoGroup title="classList">
                <DemoItem note="Should override text color">
                    <Layout classList={staticClassList(styles, 'override')}>Foobar</Layout>
                </DemoItem>
            </DemoGroup>
        </DemoPage>
    );
};
