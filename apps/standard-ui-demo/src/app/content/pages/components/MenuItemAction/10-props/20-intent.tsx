import { Menu } from '@no-comply/standard-ui';

import { createDocsItemData, createDocsSectionData } from '../../../../types';
import { itemProps as props } from '../constants';
import { AllMenuItemItemActionVariants } from '../examples';

const items = [
	createDocsItemData({ title: 'positive', props }, () => (
		<Menu aria-label="foo">
			<AllMenuItemItemActionVariants intent="positive" />
		</Menu>
	)),
	createDocsItemData({ title: 'negative', props: { ...props, defaultValue: true } }, () => (
		<Menu aria-label="foo">
			<AllMenuItemItemActionVariants intent="negative" />
		</Menu>
	)),
	createDocsItemData({ title: 'neutral', props }, () => (
		<Menu aria-label="foo">
			<AllMenuItemItemActionVariants intent="neutral" />
		</Menu>
	)),
];

export default createDocsSectionData({
	title: 'intent',
	items,
});
