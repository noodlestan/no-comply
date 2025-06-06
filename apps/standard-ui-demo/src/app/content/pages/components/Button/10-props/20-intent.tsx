import { createDocsItemData, createDocsSectionData } from '../../../../types';
import { itemProps as props } from '../constants';
import { AllButtonVariants } from '../examples';

const items = [
	createDocsItemData({ title: 'positive', props }, () => <AllButtonVariants intent="positive" />),
	createDocsItemData({ title: 'negative', props: { ...props, defaultValue: true } }, () => (
		<AllButtonVariants intent="negative" />
	)),
	createDocsItemData({ title: 'neutral', props }, () => <AllButtonVariants intent="neutral" />),
];

export default createDocsSectionData({
	title: 'intent',
	items,
});
