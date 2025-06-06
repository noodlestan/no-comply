import { Menu, MenuItemAction } from '@no-comply/standard-ui';
import { UnlockIcon } from 'lucide-solid';

import { createDocsItemData, createDocsSectionData } from '../../../../types';
import { itemProps as props } from '../constants';

export default createDocsSectionData({
	title: 'disabled',
	items: [
		createDocsItemData({ props }, () => (
			<Menu aria-label="foo">
				<MenuItemAction label="Unlock items" icon={UnlockIcon} disabled />
			</Menu>
		)),
	],
});
