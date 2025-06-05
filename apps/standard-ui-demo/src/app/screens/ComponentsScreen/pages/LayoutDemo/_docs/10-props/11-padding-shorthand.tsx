import { Layout } from '@no-comply/standard-ui';

import { createDemoItem, createDemoSectionData } from '../../../../../../content';
import { ExampleLayoutChild } from '../../../../../../examples';
import { itemProps } from '../constants';

const RESPONSIVE_PADDING = [
    { _: 'xs', m: 's', l: 'm' },
    { _: 'm', m: 'l', l: 'xl' },
] as const;
const props = { ...itemProps, bps: Object.keys(RESPONSIVE_PADDING) };

export default createDemoSectionData({
    title: 'padding (shorthand)',
    items: [
        createDemoItem({ title: '[block, inline]', props }, () => (
            <Layout padding={['s', 'l']}>
                <ExampleLayoutChild />
            </Layout>
        )),
        createDemoItem({ title: '[block start, inline, block end])', props }, () => (
            <Layout padding={['s', 'm', 'l']}>
                <ExampleLayoutChild />
            </Layout>
        )),
        createDemoItem(
            { title: '[block start, inline end, block end, inline start])', props },
            () => (
                <Layout padding={['none', 'm', 'l', 's']}>
                    <ExampleLayoutChild />
                </Layout>
            ),
        ),
        // ResponsiveDemoItem
        createDemoItem({ title: '[block, inline] (responsive)', props }, () => (
            <Layout padding={RESPONSIVE_PADDING}>
                <ExampleLayoutChild />
            </Layout>
        )),
    ],
});
