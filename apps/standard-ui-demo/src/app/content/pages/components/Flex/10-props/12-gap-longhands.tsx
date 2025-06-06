import { type BreakpointName, Flex, type FlexProps, Icon } from '@no-comply/standard-ui';
import { HomeIcon } from 'lucide-solid';

import { ExampleLayoutChild } from '../../../../examples';
import {
	createDocsItemData,
	createDocsResponsiveItemData,
	createDocsSectionData,
} from '../../../../types';
import { itemProps as props } from '../constants';

const RESPONSIVE_GAP: FlexProps['gap'] = {
	_: 'xs',
	m: 'm',
	l: 'xl',
};

const BPS = Object.keys(RESPONSIVE_GAP) as BreakpointName[];

export default createDocsSectionData({
	title: 'gap (longhands)',
	collapse: true,
	items: [
		createDocsItemData({ title: 'rowGap', props }, () => (
			<Flex direction="row" wrap rowGap="s">
				<ExampleLayoutChild content={<Icon icon={HomeIcon} />} style={{ 'min-width': '40%' }} />
				<ExampleLayoutChild content={<Icon icon={HomeIcon} />} style={{ 'min-width': '40%' }} />
				<ExampleLayoutChild content={<Icon icon={HomeIcon} />} style={{ 'min-width': '40%' }} />
				<ExampleLayoutChild content={<Icon icon={HomeIcon} />} style={{ 'min-width': '40%' }} />
			</Flex>
		)),
		createDocsResponsiveItemData(BPS, { title: 'rowGap (responsive)', props }, () => (
			<Flex direction="row" wrap rowGap={RESPONSIVE_GAP}>
				<ExampleLayoutChild content={<Icon icon={HomeIcon} />} style={{ 'min-width': '40%' }} />
				<ExampleLayoutChild content={<Icon icon={HomeIcon} />} style={{ 'min-width': '40%' }} />
				<ExampleLayoutChild content={<Icon icon={HomeIcon} />} style={{ 'min-width': '40%' }} />
				<ExampleLayoutChild content={<Icon icon={HomeIcon} />} style={{ 'min-width': '40%' }} />
			</Flex>
		)),
		createDocsItemData({ title: 'columnGap', props }, () => (
			<Flex direction="row" wrap columnGap="s">
				<ExampleLayoutChild content={<Icon icon={HomeIcon} />} style={{ 'min-width': '40%' }} />
				<ExampleLayoutChild content={<Icon icon={HomeIcon} />} style={{ 'min-width': '40%' }} />
				<ExampleLayoutChild content={<Icon icon={HomeIcon} />} style={{ 'min-width': '40%' }} />
				<ExampleLayoutChild content={<Icon icon={HomeIcon} />} style={{ 'min-width': '40%' }} />
			</Flex>
		)),
		createDocsResponsiveItemData(BPS, { title: 'columnGap (responsive)', props }, () => (
			<Flex direction="row" wrap columnGap={RESPONSIVE_GAP}>
				<ExampleLayoutChild content={<Icon icon={HomeIcon} />} style={{ 'min-width': '40%' }} />
				<ExampleLayoutChild content={<Icon icon={HomeIcon} />} style={{ 'min-width': '40%' }} />
				<ExampleLayoutChild content={<Icon icon={HomeIcon} />} style={{ 'min-width': '40%' }} />
				<ExampleLayoutChild content={<Icon icon={HomeIcon} />} style={{ 'min-width': '40%' }} />
			</Flex>
		)),
	],
});
