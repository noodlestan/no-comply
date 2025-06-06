import { type BreakpointName, Layout, type LayoutProps } from '@no-comply/standard-ui';

import { ExampleLayoutChild } from '../../../../examples';
import {
    createDocsItemData,
    createDocsResponsiveItemData,
    createDocsSectionData,
} from '../../../../types';
import { itemProps as props } from '../constants';

const RESPONSIVE_PADDING: LayoutProps['padding'] = [
    { _: 'xs', m: 's', l: 'm' },
    { _: 'm', m: 'l', l: 'xl' },
];

const BPS = Object.keys(RESPONSIVE_PADDING) as BreakpointName[];

export default createDocsSectionData({
    title: 'padding (shorthand)',
    items: [
        createDocsItemData({ title: '[block, inline]', props }, () => (
            <Layout padding={['s', 'l']}>
                <ExampleLayoutChild />
            </Layout>
        )),
        createDocsItemData({ title: '[block start, inline, block end])', props }, () => (
            <Layout padding={['s', 'm', 'l']}>
                <ExampleLayoutChild />
            </Layout>
        )),
        createDocsItemData(
            { title: '[block start, inline end, block end, inline start])', props },
            () => (
                <Layout padding={['none', 'm', 'l', 's']}>
                    <ExampleLayoutChild />
                </Layout>
            ),
        ),
        createDocsResponsiveItemData(BPS, { title: '[block, inline] (responsive)', props }, () => (
            <Layout padding={RESPONSIVE_PADDING}>
                <ExampleLayoutChild />
            </Layout>
        )),
    ],
});
