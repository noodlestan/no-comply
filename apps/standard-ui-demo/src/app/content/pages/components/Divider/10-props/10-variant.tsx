import { Divider } from '@no-comply/standard-ui';

import { createDocsItemData, createDocsSectionData } from '../../../../types';
import { itemProps as props } from '../constants';

export default createDocsSectionData({
	title: 'variant',
	items: [
		createDocsItemData({ title: 'base', props }, () => <Divider variant="base" />),
		createDocsItemData({ title: 'alt', props }, () => <Divider variant="alt" />),
		createDocsItemData({ title: 'strong', props }, () => <Divider variant="strong" />),
		createDocsItemData({ title: 'muted', props }, () => <Divider variant="muted" />),
	],
});
