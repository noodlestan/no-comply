import { IconButton } from '@no-comply/standard-ui';
import { PlusIcon } from 'lucide-solid';

import { createDocsItemData, createDocsSectionData } from '../../../../types';
import { itemProps as props } from '../constants';

export default createDocsSectionData({
	title: 'round',
	items: [
		createDocsItemData({ title: 'true / large size', props }, () => (
			<IconButton icon={PlusIcon} label="Add an item" size="large" round />
		)),
		createDocsItemData({ title: 'true / medium size', props }, () => (
			<IconButton icon={PlusIcon} label="Add an item" size="medium" round />
		)),
		createDocsItemData({ title: 'true / normal size', props }, () => (
			<IconButton icon={PlusIcon} label="Add an item" size="normal" round />
		)),
		createDocsItemData({ title: 'true / small size', props }, () => (
			<IconButton icon={PlusIcon} label="Add an item" size="small" round />
		)),
	],
});
