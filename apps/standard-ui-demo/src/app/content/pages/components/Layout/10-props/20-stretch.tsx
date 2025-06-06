import { type BreakpointName, Layout, type LayoutProps } from '@no-comply/standard-ui';

import { ExampleLayoutChild } from '../../../../examples';
import {
    createDocsItemData,
    createDocsResponsiveItemData,
    createDocsSectionData,
} from '../../../../types';
import { itemPropsStretch as props } from '../constants';

const RESPONSIVE_STRETCH: LayoutProps['stretch'] = {
    _: 'full',
    m: 'width',
    l: 'none',
};

const BPS = Object.keys(RESPONSIVE_STRETCH) as BreakpointName[];

export default createDocsSectionData({
    title: 'stretch',
    items: [
        createDocsItemData({ title: 'width', props }, () => (
            <Layout stretch="width">
                <ExampleLayoutChild style={{ height: '100%' }} />
            </Layout>
        )),
        createDocsItemData({ title: 'height', props }, () => (
            <Layout stretch="height">
                <ExampleLayoutChild style={{ height: '100%' }} />
            </Layout>
        )),
        createDocsItemData({ title: 'full', props }, () => (
            <Layout stretch="full">
                <ExampleLayoutChild style={{ height: '100%' }} />
            </Layout>
        )),
        createDocsItemData({ title: 'no stretch', props: { ...props, defaultValue: true } }, () => (
            <Layout>
                <ExampleLayoutChild style={{ height: '100%' }} />
            </Layout>
        )),
        createDocsResponsiveItemData(BPS, { title: 'responsive', props }, () => (
            <Layout stretch={RESPONSIVE_STRETCH}>
                <ExampleLayoutChild style={{ height: '100%' }} />
            </Layout>
        )),
    ],
});
