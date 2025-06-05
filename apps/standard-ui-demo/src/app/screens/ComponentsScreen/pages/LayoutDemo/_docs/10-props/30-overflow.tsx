import { Layout } from '@no-comply/standard-ui';

import { createDemoItem, createDemoSectionData } from '../../../../../../content';
import { ExampleLayoutChild, ExampleMedium, ExampleSmall } from '../../../../../../examples';
import { itemPropsOverflow } from '../constants';

const RESPONSIVE_OVERFLOW = { _: 'x-auto', m: 'hidden', l: 'y-auto' } as const;
const props = { ...itemPropsOverflow, bps: Object.keys(RESPONSIVE_OVERFLOW) };

export default createDemoSectionData({
    title: 'overflow',
    items: [
        createDemoItem({ title: 'hidden', props }, () => (
            <Layout overflow="hidden">
                <ExampleLayoutChild content={<ExampleMedium />} style={{ width: '120%' }} />
            </Layout>
        )),
        createDemoItem({ title: 'x-auto', props }, () => (
            <Layout overflow="x-auto">
                <ExampleLayoutChild content={<ExampleMedium />} style={{ width: '120%' }} />
            </Layout>
        )),
        createDemoItem({ title: 'y-auto', props }, () => (
            <Layout overflow="y-auto">
                <ExampleLayoutChild content={<ExampleMedium />} style={{ width: '120%' }} />
            </Layout>
        )),
        createDemoItem({ title: 'auto', props: { ...props, defaultValue: true } }, () => (
            <Layout overflow="auto">
                <ExampleLayoutChild content={<ExampleMedium />} style={{ width: '120%' }} />
            </Layout>
        )),
        createDemoItem({ title: 'visible', props: { ...props, defaultValue: true } }, () => (
            <Layout overflow="visible">
                <ExampleLayoutChild content={<ExampleSmall />} style={{ width: '120%' }} />
            </Layout>
        )),
        // ResponsiveDemoItem
        createDemoItem({ title: 'responsive', props }, () => (
            <Layout overflow={RESPONSIVE_OVERFLOW}>
                <ExampleLayoutChild content={<ExampleMedium />} style={{ width: '120%' }} />
            </Layout>
        )),
    ],
});
