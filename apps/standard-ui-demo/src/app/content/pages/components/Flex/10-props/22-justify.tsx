import { type BreakpointName, Flex, type FlexProps } from '@no-comply/standard-ui';

import { ExampleLayoutChild } from '../../../../examples';
import {
	createDocsItemData,
	createDocsResponsiveItemData,
	createDocsSectionData,
} from '../../../../types';
import { itemPropsJustify as props } from '../constants';

const RESPONSIVE_JUSTIFY: FlexProps['justify'] = {
	_: 'start',
	m: 'between',
	l: 'center',
};

const BPS = Object.keys(RESPONSIVE_JUSTIFY) as BreakpointName[];

export default createDocsSectionData({
	title: 'justify',
	items: [
		createDocsItemData({ title: 'center', props }, () => (
			<Flex direction="row" gap="s" justify="center">
				<ExampleLayoutChild />
				<ExampleLayoutChild />
				<ExampleLayoutChild />
			</Flex>
		)),
		createDocsItemData({ title: 'start', props: { ...props, defaultValue: true } }, () => (
			<Flex direction="row" gap="s" justify="start">
				<ExampleLayoutChild />
				<ExampleLayoutChild />
				<ExampleLayoutChild />
			</Flex>
		)),
		createDocsItemData({ title: 'end', props }, () => (
			<Flex direction="row" gap="s" justify="end">
				<ExampleLayoutChild />
				<ExampleLayoutChild />
				<ExampleLayoutChild />
			</Flex>
		)),
		createDocsItemData({ title: 'around', props }, () => (
			<Flex direction="row" gap="s" justify="around">
				<ExampleLayoutChild />
				<ExampleLayoutChild />
				<ExampleLayoutChild />
			</Flex>
		)),
		createDocsItemData({ title: 'between', props }, () => (
			<Flex direction="row" gap="s" justify="between">
				<ExampleLayoutChild />
				<ExampleLayoutChild />
				<ExampleLayoutChild />
			</Flex>
		)),
		createDocsResponsiveItemData(BPS, { title: 'responsive', props }, () => (
			<Flex direction="row" justify={RESPONSIVE_JUSTIFY}>
				<ExampleLayoutChild style={{ height: '100%' }} />
				<ExampleLayoutChild style={{ height: '100%' }} />
				<ExampleLayoutChild style={{ height: '100%' }} />
			</Flex>
		)),
	],
});
