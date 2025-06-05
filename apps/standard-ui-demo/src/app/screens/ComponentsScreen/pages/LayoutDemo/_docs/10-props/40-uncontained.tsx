import { Layout } from '@no-comply/standard-ui';

import { createDemoItem, createDemoSectionData } from '../../../../../../content';
import { ExampleLayoutChild, ExampleSmall } from '../../../../../../examples';
import { itemProps } from '../constants';

const RESPONSIVE_CONTAINMENT = { _: true, m: false, l: true } as const;
const props = { ...itemProps, bps: Object.keys(RESPONSIVE_CONTAINMENT) };

export default createDemoSectionData({
    title: 'uncontained',
    items: [
        createDemoItem({ title: 'uncontained', props }, () => (
            <Layout uncontained>
                <ExampleLayoutChild content={<ExampleSmall />} />
            </Layout>
        )),
        createDemoItem({ title: 'false', props: { ...props, defaultValue: true } }, () => (
            <Layout uncontained={false}>
                <ExampleLayoutChild content={<ExampleSmall />} />
            </Layout>
        )),
        // ResponsiveDemoItem
        createDemoItem({ title: 'responsive', props }, () => (
            <Layout uncontained={RESPONSIVE_CONTAINMENT}>
                <ExampleLayoutChild content={<ExampleSmall />} />
            </Layout>
        )),
    ],
});
