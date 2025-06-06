import { type BreakpointName, Flex, type FlexProps } from '@no-comply/standard-ui';

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
	title: 'gap',
	collapse: true,
	items: [
		createDocsItemData({ title: '2xl', props }, () => (
			<Flex direction="row" gap="2xl">
				<ExampleLayoutChild />
				<ExampleLayoutChild />
			</Flex>
		)),
		createDocsItemData({ title: 'xl', props }, () => (
			<Flex direction="row" gap="xl">
				<ExampleLayoutChild />
				<ExampleLayoutChild />
			</Flex>
		)),
		createDocsItemData({ title: 'l', props }, () => (
			<Flex direction="row" gap="l">
				<ExampleLayoutChild />
				<ExampleLayoutChild />
			</Flex>
		)),
		createDocsItemData({ title: 'm', props }, () => (
			<Flex direction="row" gap="m">
				<ExampleLayoutChild />
				<ExampleLayoutChild />
			</Flex>
		)),
		createDocsItemData({ title: 's', props }, () => (
			<Flex direction="row" gap="s">
				<ExampleLayoutChild />
				<ExampleLayoutChild />
			</Flex>
		)),
		createDocsItemData({ title: 'xs', props }, () => (
			<Flex direction="row" gap="xs">
				<ExampleLayoutChild />
				<ExampleLayoutChild />
			</Flex>
		)),
		createDocsItemData({ title: 'none', props }, () => (
			<Flex direction="row" gap="none">
				<ExampleLayoutChild />
				<ExampleLayoutChild />
			</Flex>
		)),
		createDocsResponsiveItemData(BPS, { title: 'responsive', props }, () => (
			<Flex direction="row" gap={RESPONSIVE_GAP}>
				<ExampleLayoutChild />
				<ExampleLayoutChild />
			</Flex>
		)),
	],
});
