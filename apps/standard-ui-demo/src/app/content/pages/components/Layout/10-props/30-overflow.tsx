import { type BreakpointName, Layout, type LayoutProps } from '@no-comply/standard-ui';

import { ExampleLayoutChild, ExampleMedium, ExampleSmall } from '../../../../examples';
import {
	createDocsItemData,
	createDocsResponsiveItemData,
	createDocsSectionData,
} from '../../../../types';
import { itemPropsOverflow as props } from '../constants';

const RESPONSIVE_OVERFLOW: LayoutProps['overflow'] = {
	_: 'x-auto',
	m: 'hidden',
	l: 'y-auto',
};

const BPS = Object.keys(RESPONSIVE_OVERFLOW) as BreakpointName[];

export default createDocsSectionData({
	title: 'overflow',
	collapse: true,
	items: [
		createDocsItemData({ title: 'hidden', props }, () => (
			<Layout overflow="hidden">
				<ExampleLayoutChild content={<ExampleMedium />} style={{ width: '120%' }} />
			</Layout>
		)),
		createDocsItemData({ title: 'x-auto', props }, () => (
			<Layout overflow="x-auto">
				<ExampleLayoutChild content={<ExampleMedium />} style={{ width: '120%' }} />
			</Layout>
		)),
		createDocsItemData({ title: 'y-auto', props }, () => (
			<Layout overflow="y-auto">
				<ExampleLayoutChild content={<ExampleMedium />} style={{ width: '120%' }} />
			</Layout>
		)),
		createDocsItemData({ title: 'auto', props: { ...props, defaultValue: true } }, () => (
			<Layout overflow="auto">
				<ExampleLayoutChild content={<ExampleMedium />} style={{ width: '120%' }} />
			</Layout>
		)),
		createDocsItemData({ title: 'visible', props: { ...props, defaultValue: true } }, () => (
			<Layout overflow="visible">
				<ExampleLayoutChild content={<ExampleSmall />} style={{ width: '120%' }} />
			</Layout>
		)),
		createDocsResponsiveItemData(BPS, { title: 'responsive', props }, () => (
			<Layout overflow={RESPONSIVE_OVERFLOW}>
				<ExampleLayoutChild content={<ExampleMedium />} style={{ width: '120%' }} />
			</Layout>
		)),
	],
});
