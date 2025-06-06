import { type BreakpointName, Layout, type LayoutProps } from '@no-comply/standard-ui';

import { ExampleLayoutChild } from '../../../../examples';
import {
    createDocsItemData,
    createDocsResponsiveItemData,
    createDocsSectionData,
} from '../../../../types';
import { itemProps as props } from '../constants';

const RESPONSIVE_GAP: LayoutProps['padding'] = {
    _: 'xs',
    m: 'm',
    l: 'xl',
};

const BPS = Object.keys(RESPONSIVE_GAP) as BreakpointName[];

export default createDocsSectionData({
    title: 'padding',
    items: [
        createDocsItemData({ title: 'xl', props }, () => (
            <Layout padding="xl">
                <ExampleLayoutChild />
            </Layout>
        )),
        createDocsItemData({ title: 'l', props }, () => (
            <Layout padding="l">
                <ExampleLayoutChild />
            </Layout>
        )),
        createDocsItemData({ title: 'm', props }, () => (
            <Layout padding="m">
                <ExampleLayoutChild />
            </Layout>
        )),
        createDocsItemData({ title: 's', props }, () => (
            <Layout padding="s">
                <ExampleLayoutChild />
            </Layout>
        )),
        createDocsItemData({ title: 'xs', props }, () => (
            <Layout padding="xs">
                <ExampleLayoutChild />
            </Layout>
        )),
        createDocsItemData({ title: 'none', props }, () => (
            <Layout padding="none">
                <ExampleLayoutChild />
            </Layout>
        )),
        createDocsResponsiveItemData(BPS, { title: 'responsive', props }, () => (
            <Layout padding={RESPONSIVE_GAP}>
                <ExampleLayoutChild />
            </Layout>
        )),
    ],
});
