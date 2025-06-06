import { Menu, MenuItemAction } from '@no-comply/standard-ui';

import { createDocsItemData, createDocsSectionData } from '../../../../types';
import { itemProps as props } from '../constants';

const items = [
    createDocsItemData({ props }, () => (
        <Menu label="Edit">
            <MenuItemAction label="Cut" />
            <MenuItemAction label="Copy" />
            <MenuItemAction label="Paste" />
        </Menu>
    )),
];

export default createDocsSectionData({
    title: 'label',
    items,
});
