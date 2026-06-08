import { CloseButton } from '@no-comply/standard-ui';

import { createDocsItemData, createDocsSectionData } from '../../../../types';
import { itemProps as props } from '../constants';

export default createDocsSectionData({
	title: 'size',
	collapse: true,
	items: [
		createDocsItemData({ title: 'large', props }, () => <CloseButton label="Close" size="large" />),
		createDocsItemData({ title: 'medium', props }, () => (
			<CloseButton label="Close" size="medium" />
		)),
		createDocsItemData({ title: 'normal', props: { ...props, defaultValue: true } }, () => (
			<CloseButton label="Close" size="normal" />
		)),
		createDocsItemData({ title: 'small', props }, () => <CloseButton label="Close" size="small" />),
	],
});
