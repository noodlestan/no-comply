import { Menu, MenuItemAction } from '@no-comply/standard-ui';

import { createDemoItem, createDemoSectionData } from '../../../../../../content';
import { itemProps as props } from '../constants';

const items = [
    createDemoItem({ props }, () => (
        <Menu label="Edit">
            <MenuItemAction label="Cut" />
            <MenuItemAction label="Copy" />
            <MenuItemAction label="Paste" />
        </Menu>
    )),
];

export default createDemoSectionData({
    title: 'label',
    items,
});
