import { type DocsSectionData, createDocsItemData, createDocsSectionData } from '../../../../types';
import { itemProps as props } from '../constants';
import { AllButtonVariants } from '../examples';

export default function (): DocsSectionData {
	return createDocsSectionData({
		title: 'intent',
		collapse: true,
		items: [
			createDocsItemData({ title: 'positive', props }, () => (
				<AllButtonVariants intent="positive" />
			)),
			createDocsItemData({ title: 'negative', props: { ...props, defaultValue: true } }, () => (
				<AllButtonVariants intent="negative" />
			)),
			createDocsItemData({ title: 'neutral', props }, () => <AllButtonVariants intent="neutral" />),
		],
	});
}
