import { createDocsItemData, createDocsSectionData } from '../../../../types';
import { itemProps as props } from '../constants';
import { IconButtonIntentsExample } from '../examples';

const items = [
	createDocsItemData({ title: 'positive', props }, () => (
		<IconButtonIntentsExample intent="positive" />
	)),
	createDocsItemData({ title: 'negative', props }, () => (
		<IconButtonIntentsExample intent="negative" />
	)),
	createDocsItemData({ title: 'neutral', props: { ...props, defaultValue: true } }, () => (
		<IconButtonIntentsExample intent="neutral" />
	)),
];

export default createDocsSectionData({
	title: 'intent',
	items,
});
