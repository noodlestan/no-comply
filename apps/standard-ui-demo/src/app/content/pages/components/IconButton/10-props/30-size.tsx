import { IconButton } from '@no-comply/standard-ui';
import PlusIcon from 'lucide-solid/icons/plus';

import { createDocsItemData, createDocsSectionData } from '../../../../types';
import { itemProps as props } from '../constants';

export default createDocsSectionData({
	title: 'size',
	items: [
		createDocsItemData({ title: 'large', props }, () => (
			<IconButton icon={PlusIcon} label="Add an item" size="large" />
		)),
		createDocsItemData({ title: 'medium', props }, () => (
			<IconButton icon={PlusIcon} label="Add an item" size="medium" />
		)),
		createDocsItemData({ title: 'normal', props: { ...props, defaultValue: true } }, () => (
			<IconButton icon={PlusIcon} label="Add an item" size="normal" />
		)),
		createDocsItemData({ title: 'small', props }, () => (
			<IconButton icon={PlusIcon} label="Add an item" size="small" />
		)),
	],
});
