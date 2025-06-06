import { Menu, MenuItemAction } from '@no-comply/standard-ui';

import { lipsumWords } from '../../../../components';
import { createDocsItemData, createDocsSectionData } from '../../../../types';
import { itemProps as props } from '../constants';

const items = [
	createDocsItemData({ props }, () => (
		<Menu aria-label="foo">
			<MenuItemAction label="Unlock items" description={lipsumWords(9)} />
		</Menu>
	)),
];

export default createDocsSectionData({
	title: 'description',
	items,
});
