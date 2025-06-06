import { Menu } from '@no-comply/standard-ui';

import { createDocsItemData, createDocsSectionData } from '../../../../types';
import { itemProps as props } from '../constants';
import { AllMenuItemItemActionVariants } from '../examples';

export default createDocsSectionData({
	title: 'intent',
	collapse: true,
	items: [
		createDocsItemData({ title: 'neutral', props: { ...props, defaultValue: true } }, () => (
			<Menu aria-label="foo">
				<AllMenuItemItemActionVariants intent="neutral" />
			</Menu>
		)),
		createDocsItemData({ title: 'positive', props }, () => (
			<Menu aria-label="foo">
				<AllMenuItemItemActionVariants intent="positive" />
			</Menu>
		)),
		createDocsItemData({ title: 'negative', props }, () => (
			<Menu aria-label="foo">
				<AllMenuItemItemActionVariants intent="negative" />
			</Menu>
		)),
	],
});
