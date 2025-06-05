import { Layout } from '@no-comply/standard-ui';

import { createDemoItem, createDemoSectionData } from '../../../../../../content';
import { ExampleLayoutChild } from '../../../../../../examples';
import { itemPropsStretch } from '../constants';

const RESPONSIVE_STRETCH = { _: 'full', m: 'width', l: 'none' } as const;
const props = { ...itemPropsStretch, bps: Object.keys(RESPONSIVE_STRETCH) };

export default createDemoSectionData({
    title: 'stretch',
    items: [
        createDemoItem({ title: 'width', props }, () => (
            <Layout stretch="width">
                <ExampleLayoutChild style={{ height: '100%' }} />
            </Layout>
        )),
        createDemoItem({ title: 'height', props }, () => (
            <Layout stretch="height">
                <ExampleLayoutChild style={{ height: '100%' }} />
            </Layout>
        )),
        createDemoItem({ title: 'full', props }, () => (
            <Layout stretch="full">
                <ExampleLayoutChild style={{ height: '100%' }} />
            </Layout>
        )),
        createDemoItem({ title: 'no stretch', props: { ...props, defaultValue: true } }, () => (
            <Layout>
                <ExampleLayoutChild style={{ height: '100%' }} />
            </Layout>
        )),
        // ResponsiveDemoItem
        createDemoItem({ title: 'responsive', props }, () => (
            <Layout stretch={RESPONSIVE_STRETCH}>
                <ExampleLayoutChild style={{ height: '100%' }} />
            </Layout>
        )),
    ],
});
