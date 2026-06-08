import { IconButton } from '@no-comply/standard-ui';
import PlusIcon from 'lucide-solid/icons/plus';

import { createDocsItemData, createDocsSectionData } from '../../../../types';

export default createDocsSectionData({
	title: 'disabled',
	items: [
		createDocsItemData({ props: { row: true } }, () => (
			<IconButton icon={PlusIcon} label="Add an item" disabled />
		)),
	],
});
