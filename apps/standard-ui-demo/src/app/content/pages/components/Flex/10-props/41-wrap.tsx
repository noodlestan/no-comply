import { type BreakpointName, Flex, type FlexProps } from '@no-comply/standard-ui';

import { ExampleLayoutChild } from '../../../../examples';
import {
	createDocsItemData,
	createDocsResponsiveItemData,
	createDocsSectionData,
} from '../../../../types';
import { itemPropsSized as props } from '../constants';

const RESPONSIVE_WRAP: FlexProps['wrap'] = {
	_: true,
	m: false,
	l: true,
};

const BPS = Object.keys(RESPONSIVE_WRAP) as BreakpointName[];

export default createDocsSectionData({
	title: 'wrap',
	items: [
		createDocsItemData({ title: 'wrap', props }, () => (
			<Flex direction="row" gap="s" wrap={true}>
				<ExampleLayoutChild size="small" />
				<ExampleLayoutChild size="small" />
			</Flex>
		)),
		createDocsItemData(
			{ title: 'no wrap (default)', props: { ...props, defaultValue: true } },
			() => (
				<Flex direction="row" gap="s" wrap={false}>
					<ExampleLayoutChild size="small" />
					<ExampleLayoutChild size="small" />
				</Flex>
			),
		),
		createDocsResponsiveItemData(BPS, { title: 'responsive', props }, () => (
			<Flex direction="row" wrap={RESPONSIVE_WRAP}>
				<ExampleLayoutChild size="small" />
				<ExampleLayoutChild size="small" />
			</Flex>
		)),
	],
});
