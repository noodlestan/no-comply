import { Layout } from '@no-comply/standard-ui';

import { createDemoItem, createDemoSectionData } from '../../../../../../content';
import { ExampleLayoutChild } from '../../../../../../examples';
import { itemProps } from '../constants';

const RESPONSIVE_GAP = { _: 'xs', m: 'm', l: 'xl' } as const;
const props = { ...itemProps, bps: Object.keys(RESPONSIVE_GAP) };

export default createDemoSectionData({
    title: 'padding',
    items: [
        createDemoItem({ title: 'xl', props }, () => (
            <Layout padding="xl">
                <ExampleLayoutChild />
            </Layout>
        )),
        createDemoItem({ title: 'l', props }, () => (
            <Layout padding="l">
                <ExampleLayoutChild />
            </Layout>
        )),
        createDemoItem({ title: 'm', props }, () => (
            <Layout padding="m">
                <ExampleLayoutChild />
            </Layout>
        )),
        createDemoItem({ title: 's', props }, () => (
            <Layout padding="s">
                <ExampleLayoutChild />
            </Layout>
        )),
        createDemoItem({ title: 'xs', props }, () => (
            <Layout padding="xs">
                <ExampleLayoutChild />
            </Layout>
        )),
        createDemoItem({ title: 'none', props }, () => (
            <Layout padding="none">
                <ExampleLayoutChild />
            </Layout>
        )),
        // ResponsiveDemoItem
        createDemoItem({ title: 'responsive', props }, () => (
            <Layout padding={RESPONSIVE_GAP}>
                <ExampleLayoutChild />
            </Layout>
        )),
    ],
});
