import { Divider } from '@no-comply/standard-ui';

import { createDocsItemData, createDocsSectionData } from '../../../../types';
import { itemProps as props, itemPropsStyled as propsStyled } from '../constants';
import { VerticalDividerExample } from '../examples';

export default createDocsSectionData({
	title: 'length',
	collapse: true,
	items: [
		createDocsItemData({ title: 'full (horizontal)', props }, () => <Divider length="full" />),
		createDocsItemData({ title: 'l (horizontal)', props }, () => <Divider length="long" />),
		createDocsItemData({ title: 'm (horizontal)', props }, () => <Divider length="medium" />),
		createDocsItemData({ title: 's (horizontal)', props }, () => <Divider length="short" />),
		createDocsItemData(
			{ title: 'number (rem) (horizontal)', props: { ...props, note: '7rem' } },
			() => <Divider length={7} />,
		),
		createDocsItemData({ title: 'full (vertical)', props: propsStyled }, () => (
			<VerticalDividerExample home="large">
				<Divider orientation="vertical" length="full" />
			</VerticalDividerExample>
		)),
		createDocsItemData({ title: 'l (vertical)', props: propsStyled }, () => (
			<VerticalDividerExample items="medium">
				<Divider orientation="vertical" length="long" />
			</VerticalDividerExample>
		)),
		createDocsItemData({ title: 'm (vertical)', props: propsStyled }, () => (
			<VerticalDividerExample>
				<Divider orientation="vertical" length="medium" />
			</VerticalDividerExample>
		)),
		createDocsItemData({ title: 's (vertical)', props: propsStyled }, () => (
			<VerticalDividerExample items="small">
				<Divider orientation="vertical" length="short" />
			</VerticalDividerExample>
		)),
		createDocsItemData(
			{ title: 'number (rem) (vertical)', props: { ...propsStyled, note: '7rem' } },
			() => (
				<VerticalDividerExample home="large">
					<Divider orientation="vertical" length={7} />
				</VerticalDividerExample>
			),
		),
	],
});
