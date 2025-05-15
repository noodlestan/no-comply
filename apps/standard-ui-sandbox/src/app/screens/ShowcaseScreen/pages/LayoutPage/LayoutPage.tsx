import { staticClassList } from '@noodlestan/context-ui-primitives';
import { Layout } from '@noodlestan/standard-ui';
import { type Component } from 'solid-js';

import { findComponent } from '../../../../../data';
import { ComponentMeta, DemoGroup, DemoItem } from '../../../../components';
import { ExampleLayoutChild, ExampleLayoutContents } from '../../../../examples';
import { DemoPage } from '../../../../templates';

import styles from './LayoutPage.module.css';

const longLoremIpsum =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent quis semper diam, in euismod libero.';

export const LayoutPage: Component = () => {
    const COMPONENT = findComponent('Layout');

    const itemClassList = staticClassList(styles, 'LayoutPage--Item');
    const overflowItemClassList = staticClassList(styles, 'LayoutPage--OverflowItem');
    const stretchItemClassList = staticClassList(styles, 'LayoutPage--StretchItem');

    return (
        <DemoPage title="Layout" classList={staticClassList(styles, 'LayoutPage')}>
            <ComponentMeta component={COMPONENT} />
            <DemoGroup title="defaults">
                <DemoItem classList={itemClassList}>
                    <Layout>
                        <ExampleLayoutChild />
                    </Layout>
                </DemoItem>
            </DemoGroup>
            <DemoGroup title="padding">
                <DemoItem classList={itemClassList} title="none">
                    <Layout>
                        <ExampleLayoutChild />
                    </Layout>
                </DemoItem>
                <DemoItem title="s" classList={itemClassList}>
                    <Layout padding="s">
                        <ExampleLayoutChild />
                    </Layout>
                </DemoItem>
                <DemoItem title="m" classList={itemClassList}>
                    <Layout padding="m">
                        <ExampleLayoutChild />
                    </Layout>
                </DemoItem>
                <DemoItem title="l" classList={itemClassList}>
                    <Layout padding="l">
                        <ExampleLayoutChild />
                    </Layout>
                </DemoItem>
            </DemoGroup>
            <DemoGroup title="stretch">
                <DemoItem title="no stretch" classList={stretchItemClassList}>
                    <Layout>
                        <ExampleLayoutChild stretch />
                    </Layout>
                </DemoItem>
                <DemoItem title="width" classList={stretchItemClassList}>
                    <Layout stretch="width">
                        <ExampleLayoutChild stretch />
                    </Layout>
                </DemoItem>
                <DemoItem title="height" classList={stretchItemClassList}>
                    <Layout stretch="height">
                        <ExampleLayoutChild stretch />
                    </Layout>
                </DemoItem>
                <DemoItem title="full" classList={stretchItemClassList}>
                    <Layout stretch="full">
                        <ExampleLayoutChild stretch />
                    </Layout>
                </DemoItem>
            </DemoGroup>
            <DemoGroup title="overflow">
                <DemoItem title="auto" classList={overflowItemClassList}>
                    <Layout overflow="auto">
                        <ExampleLayoutContents count={10} title={longLoremIpsum} width={500} />
                    </Layout>
                </DemoItem>
                <DemoItem title="x-auto" classList={overflowItemClassList}>
                    <Layout overflow="x-auto">
                        <ExampleLayoutContents count={10} title={longLoremIpsum} width={500} />
                    </Layout>
                </DemoItem>
                <DemoItem title="y-auto" classList={overflowItemClassList}>
                    <Layout overflow="y-auto">
                        <ExampleLayoutContents count={10} title={longLoremIpsum} />
                    </Layout>
                </DemoItem>
                <DemoItem title="hidden" classList={overflowItemClassList}>
                    <Layout overflow="hidden">
                        <ExampleLayoutContents count={10} title={longLoremIpsum} />
                    </Layout>
                </DemoItem>
            </DemoGroup>
            <DemoGroup title="padding">
                <DemoItem classList={itemClassList} title="none">
                    <Layout>
                        <ExampleLayoutContents />
                    </Layout>
                </DemoItem>
                <DemoItem title="s" classList={itemClassList}>
                    <Layout padding="s">
                        <ExampleLayoutContents />
                    </Layout>
                </DemoItem>
                <DemoItem title="m" classList={itemClassList}>
                    <Layout padding="m">
                        <ExampleLayoutContents />
                    </Layout>
                </DemoItem>
                <DemoItem title="l" classList={itemClassList}>
                    <Layout padding="l">
                        <ExampleLayoutContents />
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
