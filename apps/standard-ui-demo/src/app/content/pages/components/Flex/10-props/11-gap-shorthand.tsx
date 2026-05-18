import { type BreakpointName, Flex, type FlexProps, Icon } from '@no-comply/standard-ui';
import HomeIcon from 'lucide-solid/icons/home';

import { ExampleLayoutChild } from '../../../../examples';
import {
	createDocsItemData,
	createDocsResponsiveItemData,
	createDocsSectionData,
} from '../../../../types';
import { itemProps as props } from '../constants';

const RESPONSIVE_GAP: FlexProps['gap'] = [
	{ _: 'xs', m: 's', l: 'm' },
	{ _: 'm', m: 'l', l: 'xl' },
];

const BPS = Object.keys(RESPONSIVE_GAP) as BreakpointName[];

export default createDocsSectionData({
	title: 'gap (shorthand)',
	collapse: true,
	items: [
		createDocsItemData({ title: '[block, inline]', props }, () => (
			<Flex direction="row" wrap gap={['s', 'l']}>
				<ExampleLayoutChild content={<Icon icon={HomeIcon} />} style={{ 'min-width': '40%' }} />
				<ExampleLayoutChild content={<Icon icon={HomeIcon} />} style={{ 'min-width': '40%' }} />
				<ExampleLayoutChild content={<Icon icon={HomeIcon} />} style={{ 'min-width': '40%' }} />
				<ExampleLayoutChild content={<Icon icon={HomeIcon} />} style={{ 'min-width': '40%' }} />
			</Flex>
		)),
		createDocsResponsiveItemData(BPS, { title: '[block, inline] (responsive)', props }, () => (
			<Flex direction="row" wrap gap={RESPONSIVE_GAP}>
				<ExampleLayoutChild content={<Icon icon={HomeIcon} />} style={{ 'min-width': '40%' }} />
				<ExampleLayoutChild content={<Icon icon={HomeIcon} />} style={{ 'min-width': '40%' }} />
				<ExampleLayoutChild content={<Icon icon={HomeIcon} />} style={{ 'min-width': '40%' }} />
				<ExampleLayoutChild content={<Icon icon={HomeIcon} />} style={{ 'min-width': '40%' }} />
			</Flex>
		)),
	],
});
