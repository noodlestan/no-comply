import { type BreakpointName, Flex, type FlexProps } from '@no-comply/standard-ui';

import { ExampleLayoutChild } from '../../../../examples';
import {
	createDocsItemData,
	createDocsResponsiveItemData,
	createDocsSectionData,
} from '../../../../types';
import { itemPropsBlock as props } from '../constants';

const RESPONSIVE_INLINE: FlexProps['inline'] = {
	_: true,
	m: false,
	l: true,
};

const BPS = Object.keys(RESPONSIVE_INLINE) as BreakpointName[];

export default createDocsSectionData({
	title: 'inline',
	collapse: true,
	items: [
		createDocsItemData({ title: 'inline', props }, () => (
			<>
				<Flex inline={false}>
					<ExampleLayoutChild size="small" />
				</Flex>
				<Flex inline={false}>
					<ExampleLayoutChild size="small" />
				</Flex>
			</>
		)),
		createDocsItemData(
			{ title: 'not inline (default)', props: { ...props, defaultValue: true } },
			() => (
				<>
					<Flex inline={true}>
						<ExampleLayoutChild size="small" />
					</Flex>
					<Flex inline={true}>
						<ExampleLayoutChild size="small" />
					</Flex>
				</>
			),
		),
		createDocsResponsiveItemData(BPS, { title: 'responsive', props }, () => (
			<>
				<Flex inline={RESPONSIVE_INLINE}>
					<ExampleLayoutChild size="small" />
				</Flex>
				<Flex inline={RESPONSIVE_INLINE}>
					<ExampleLayoutChild size="small" />
				</Flex>
			</>
		)),
	],
});
