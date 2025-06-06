import { createDocsItemData, createDocsSectionData } from '../../../../types';
import { itemProps as props } from '../constants';
import { IconButtonVariantsExample } from '../examples';

export default createDocsSectionData({
	title: 'variant',
	collapse: true,
	items: [
		createDocsItemData({ title: 'primary', props }, () => (
			<IconButtonVariantsExample variant="primary" />
		)),
		createDocsItemData({ title: 'secondary', props: { ...props, defaultValue: true } }, () => (
			<IconButtonVariantsExample variant="secondary" />
		)),
		createDocsItemData({ title: 'plain', props }, () => (
			<IconButtonVariantsExample variant="plain" />
		)),
	],
});
