import { Menu, MenuItemAction } from '@no-comply/standard-ui';
import LockOpenIcon from 'lucide-solid/icons/lock-open';

import { createDocsItemData, createDocsSectionData } from '../../../../types';
import { itemProps as props } from '../constants';

export default createDocsSectionData({
	title: 'Basic usage',
	items: [
		createDocsItemData({ title: 'With a text label', props }, () => (
			<Menu aria-label="foo">
				<MenuItemAction label="Select All" />
			</Menu>
		)),
		createDocsItemData({ title: 'With an icon', props }, () => (
			<Menu aria-label="foo">
				<MenuItemAction label="Unlock items" icon={LockOpenIcon} />
			</Menu>
		)),
	],
});
