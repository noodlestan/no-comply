import { createDocsItemData, createDocsSectionData } from '../../../../types';
import { itemProps as props } from '../constants';
import { IconButtonVariantsExample } from '../examples';

const items = [
	createDocsItemData({ title: 'primary', props }, () => (
		<IconButtonVariantsExample variant="primary" />
	)),
	createDocsItemData({ title: 'secondary', props: { ...props, defaultValue: true } }, () => (
		<IconButtonVariantsExample variant="secondary" />
	)),
	createDocsItemData({ title: 'plain', props }, () => (
		<IconButtonVariantsExample variant="plain" />
	)),
];

export default createDocsSectionData({
	title: 'variant',
	items,
});
