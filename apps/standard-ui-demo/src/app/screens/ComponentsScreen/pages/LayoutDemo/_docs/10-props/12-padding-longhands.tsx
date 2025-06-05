import { Layout } from '@no-comply/standard-ui';

import { createDemoItem, createDemoSectionData } from '../../../../../../content';
import { ExampleLayoutChild } from '../../../../../../examples';
import { itemProps } from '../constants';

const RESPONSIVE_PADDING = { _: 'xs', m: 'm', l: 'xl' } as const;
const props = { ...itemProps, bps: Object.keys(RESPONSIVE_PADDING) };

export default createDemoSectionData({
    title: 'padding (longhands)',
    items: [
        createDemoItem({ title: 'paddingBlock', props }, () => (
            <Layout paddingBlock="s">
                <ExampleLayoutChild />
            </Layout>
        )),
        // ResponsiveDemoItem
        createDemoItem({ title: 'paddingBlock (responsive)', props }, () => (
            <Layout paddingBlock={RESPONSIVE_PADDING}>
                <ExampleLayoutChild />
            </Layout>
        )),
        createDemoItem({ title: 'paddingBlockStart', props }, () => (
            <Layout paddingBlockStart="s">
                <ExampleLayoutChild />
            </Layout>
        )),
        // ResponsiveDemoItem
        createDemoItem({ title: 'paddingBlockStart (responsive)', props }, () => (
            <Layout paddingBlockStart={RESPONSIVE_PADDING}>
                <ExampleLayoutChild />
            </Layout>
        )),
        createDemoItem({ title: 'paddingBlockEnd', props }, () => (
            <Layout paddingBlockEnd="s">
                <ExampleLayoutChild />
            </Layout>
        )),
        // ResponsiveDemoItem
        createDemoItem({ title: 'paddingBlockEnd (responsive)', props }, () => (
            <Layout paddingBlockEnd={RESPONSIVE_PADDING}>
                <ExampleLayoutChild />
            </Layout>
        )),
        createDemoItem({ title: 'paddingInline', props }, () => (
            <Layout paddingInline="s">
                <ExampleLayoutChild />
            </Layout>
        )),
        // ResponsiveDemoItem
        createDemoItem({ title: 'paddingInline (responsive)', props }, () => (
            <Layout paddingInline={RESPONSIVE_PADDING}>
                <ExampleLayoutChild />
            </Layout>
        )),
        createDemoItem({ title: 'paddingInlineStart', props }, () => (
            <Layout paddingInlineStart="s">
                <ExampleLayoutChild />
            </Layout>
        )),
        // ResponsiveDemoItem
        createDemoItem({ title: 'paddingInlineStart (responsive)', props }, () => (
            <Layout paddingInlineStart={RESPONSIVE_PADDING}>
                <ExampleLayoutChild />
            </Layout>
        )),
        createDemoItem({ title: 'paddingInlineEnd', props }, () => (
            <Layout paddingInlineEnd="s">
                <ExampleLayoutChild />
            </Layout>
        )),
        // ResponsiveDemoItem
        createDemoItem({ title: 'paddingInlineEnd (responsive)', props }, () => (
            <Layout paddingInlineEnd={RESPONSIVE_PADDING}>
                <ExampleLayoutChild />
            </Layout>
        )),
    ],
});
