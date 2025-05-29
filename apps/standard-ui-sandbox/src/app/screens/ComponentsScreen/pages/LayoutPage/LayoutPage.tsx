import { staticClassList } from '@noodlestan/context-ui-primitives';
import { Layout } from '@noodlestan/standard-ui';
import { type Component } from 'solid-js';

import { findComponent } from '../../../../../data';
import { ComponentMeta, DemoGroup, DemoItem, ResponsiveRuler } from '../../../../components';
import { ExampleLayoutChild } from '../../../../examples';
import { DemoPage } from '../../../../templates';

import styles from './LayoutPage.module.css';

const longLoremIpsum =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent quis semper diam, in euismod libero.';

export const LayoutPage: Component = () => {
    const COMPONENT = findComponent('Layout');

    const stretchItemClassList = staticClassList(styles, 'LayoutPage--StretchItem');

    return (
        <DemoPage title="Layout" classList={staticClassList(styles, 'LayoutPage')}>
            <ComponentMeta component={COMPONENT} />

            <DemoGroup title="defaults">
                <DemoItem styled>
                    <Layout>
                        <ExampleLayoutChild />
                    </Layout>
                </DemoItem>
            </DemoGroup>

            <DemoGroup title="padding">
                <DemoItem styled title="none">
                    <Layout>
                        <ExampleLayoutChild />
                    </Layout>
                </DemoItem>
                <DemoItem title="s" styled>
                    <Layout padding="s">
                        <ExampleLayoutChild />
                    </Layout>
                </DemoItem>
                <DemoItem title="m" styled>
                    <Layout padding="m">
                        <ExampleLayoutChild />
                    </Layout>
                </DemoItem>
                <DemoItem title="l" styled>
                    <Layout padding="l">
                        <ExampleLayoutChild />
                    </Layout>
                </DemoItem>

                <DemoItem
                    title="responsive"
                    styled
                    slot={() => <ResponsiveRuler variants={{ _: 's', m: 'm', l: 'xl' }} />}
                >
                    <Layout padding={{ _: 's', m: 'm', l: 'xl' }}>
                        <ExampleLayoutChild />
                    </Layout>
                </DemoItem>
            </DemoGroup>

            <DemoGroup title="stretch">
                <DemoItem title="no stretch" styled classList={stretchItemClassList}>
                    <Layout padding="l">
                        <ExampleLayoutChild style={{ height: '100%' }} />
                    </Layout>
                </DemoItem>
                <DemoItem title="width" styled classList={stretchItemClassList}>
                    <Layout padding="l" stretch="width">
                        <ExampleLayoutChild style={{ height: '100%' }} />
                    </Layout>
                </DemoItem>
                <DemoItem title="height" styled classList={stretchItemClassList}>
                    <Layout padding="l" stretch="height">
                        <ExampleLayoutChild style={{ height: '100%' }} />
                    </Layout>
                </DemoItem>
                <DemoItem title="full" styled classList={stretchItemClassList}>
                    <Layout padding="l" stretch="full">
                        <ExampleLayoutChild style={{ height: '100%' }} />
                    </Layout>
                </DemoItem>
            </DemoGroup>

            <DemoGroup title="overflow">
                <DemoItem title="auto" width="var(--scale-4xl)" height="var(--scale-xl)" styled>
                    <Layout padding="l" overflow="auto">
                        <ExampleLayoutChild content={longLoremIpsum} style={{ width: '500px' }} />
                    </Layout>
                </DemoItem>
                <DemoItem title="x-auto" width="var(--scale-4xl)" height="var(--scale-xl)" styled>
                    <Layout padding="l" overflow="x-auto">
                        <ExampleLayoutChild content={longLoremIpsum} style={{ width: '500px' }} />
                    </Layout>
                </DemoItem>
                <DemoItem title="y-auto" width="var(--scale-4xl)" height="var(--scale-xl)" styled>
                    <Layout padding="l" overflow="y-auto">
                        <ExampleLayoutChild content={longLoremIpsum} style={{ width: '500px' }} />
                    </Layout>
                </DemoItem>
                <DemoItem title="hidden" width="var(--scale-4xl)" height="var(--scale-xl)" styled>
                    <Layout padding="l" overflow="hidden">
                        <ExampleLayoutChild content={longLoremIpsum} style={{ width: '500px' }} />
                    </Layout>
                </DemoItem>
            </DemoGroup>

            <DemoGroup title="classList">
                <DemoItem note="Should override border" styled>
                    <Layout padding="l" classList={staticClassList(styles, 'override')}>
                        <ExampleLayoutChild />
                    </Layout>
                </DemoItem>
            </DemoGroup>
        </DemoPage>
    );
};
