import { type BreakpointName, Layout, type LayoutProps } from '@no-comply/standard-ui';

import { ExampleLayoutChild, ExampleSmall } from '../../../../examples';
import {
	createDocsItemData,
	createDocsResponsiveItemData,
	createDocsSectionData,
} from '../../../../types';
import { itemProps as props } from '../constants';

const RESPONSIVE_CONTAINMENT: LayoutProps['uncontained'] = {
	_: true,
	m: false,
	l: true,
};

const BPS = Object.keys(RESPONSIVE_CONTAINMENT) as BreakpointName[];

export default createDocsSectionData({
	title: 'uncontained',
	items: [
		createDocsItemData({ title: 'uncontained', props }, () => (
			<Layout uncontained>
				<ExampleLayoutChild content={<ExampleSmall />} />
			</Layout>
		)),
		createDocsItemData({ title: 'false', props: { ...props, defaultValue: true } }, () => (
			<Layout uncontained={false}>
				<ExampleLayoutChild content={<ExampleSmall />} />
			</Layout>
		)),
		createDocsResponsiveItemData(BPS, { title: 'responsive', props }, () => (
			<Layout uncontained={RESPONSIVE_CONTAINMENT}>
				<ExampleLayoutChild content={<ExampleSmall />} />
			</Layout>
		)),
	],
});
