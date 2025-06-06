import { type BreakpointName, Layout, type LayoutProps } from '@no-comply/standard-ui';

import { ExampleLayoutChild } from '../../../../examples';
import {
	createDocsItemData,
	createDocsResponsiveItemData,
	createDocsSectionData,
} from '../../../../types';
import { itemProps as props } from '../constants';

const RESPONSIVE_PADDING: LayoutProps['padding'] = {
	_: 'xs',
	m: 'm',
	l: 'xl',
};

const BPS = Object.keys(RESPONSIVE_PADDING) as BreakpointName[];

export default createDocsSectionData({
	title: 'padding (longhands)',
	items: [
		createDocsItemData({ title: 'paddingBlock', props }, () => (
			<Layout paddingBlock="s">
				<ExampleLayoutChild />
			</Layout>
		)),
		createDocsResponsiveItemData(BPS, { title: 'paddingBlock (responsive)', props }, () => (
			<Layout paddingBlock={RESPONSIVE_PADDING}>
				<ExampleLayoutChild />
			</Layout>
		)),
		createDocsItemData({ title: 'paddingBlockStart', props }, () => (
			<Layout paddingBlockStart="s">
				<ExampleLayoutChild />
			</Layout>
		)),
		createDocsResponsiveItemData(BPS, { title: 'paddingBlockStart (responsive)', props }, () => (
			<Layout paddingBlockStart={RESPONSIVE_PADDING}>
				<ExampleLayoutChild />
			</Layout>
		)),
		createDocsItemData({ title: 'paddingBlockEnd', props }, () => (
			<Layout paddingBlockEnd="s">
				<ExampleLayoutChild />
			</Layout>
		)),
		createDocsResponsiveItemData(BPS, { title: 'paddingBlockEnd (responsive)', props }, () => (
			<Layout paddingBlockEnd={RESPONSIVE_PADDING}>
				<ExampleLayoutChild />
			</Layout>
		)),
		createDocsItemData({ title: 'paddingInline', props }, () => (
			<Layout paddingInline="s">
				<ExampleLayoutChild />
			</Layout>
		)),
		createDocsResponsiveItemData(BPS, { title: 'paddingInline (responsive)', props }, () => (
			<Layout paddingInline={RESPONSIVE_PADDING}>
				<ExampleLayoutChild />
			</Layout>
		)),
		createDocsItemData({ title: 'paddingInlineStart', props }, () => (
			<Layout paddingInlineStart="s">
				<ExampleLayoutChild />
			</Layout>
		)),
		createDocsResponsiveItemData(BPS, { title: 'paddingInlineStart (responsive)', props }, () => (
			<Layout paddingInlineStart={RESPONSIVE_PADDING}>
				<ExampleLayoutChild />
			</Layout>
		)),
		createDocsItemData({ title: 'paddingInlineEnd', props }, () => (
			<Layout paddingInlineEnd="s">
				<ExampleLayoutChild />
			</Layout>
		)),
		createDocsResponsiveItemData(BPS, { title: 'paddingInlineEnd (responsive)', props }, () => (
			<Layout paddingInlineEnd={RESPONSIVE_PADDING}>
				<ExampleLayoutChild />
			</Layout>
		)),
	],
});
