import { Surface } from '@no-comply/standard-ui';

import { createDocsItemData, createDocsSectionData } from '../../../../types';
import { itemProps as props } from '../constants';
import { AllDividerVariants } from '../examples';

export default createDocsSectionData({
	title: 'Usage in surfaces',
	collapse: true,
	items: [
		createDocsItemData({ title: 'on stage', props }, () => (
			<Surface variant="stage" padding="l">
				<AllDividerVariants />
			</Surface>
		)),
		createDocsItemData({ title: 'on page', props }, () => (
			<Surface variant="page" padding="l">
				<AllDividerVariants />
			</Surface>
		)),
		createDocsItemData({ title: 'on card', props }, () => (
			<Surface variant="card" padding="l">
				<AllDividerVariants />
			</Surface>
		)),
		createDocsItemData({ title: 'on message', props }, () => (
			<Surface variant="message" padding="l" data-message="info">
				<AllDividerVariants />
			</Surface>
		)),
		createDocsItemData({ title: 'on inverse', props }, () => (
			<Surface variant="inverse" padding="l">
				<AllDividerVariants />
			</Surface>
		)),
		createDocsItemData({ title: 'on menu', props }, () => (
			<Surface variant="menu" padding="l">
				<AllDividerVariants />
			</Surface>
		)),
	],
});
