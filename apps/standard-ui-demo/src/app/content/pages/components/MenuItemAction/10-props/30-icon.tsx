import { Menu, MenuItemAction } from '@no-comply/standard-ui';
import { UnlockIcon } from 'lucide-solid';

import { createDocsItemData, createDocsSectionData } from '../../../../types';
import { itemProps as props } from '../constants';

const items = [
    createDocsItemData({ props }, () => (
        <Menu aria-label="foo">
            <MenuItemAction label="Unlock items" icon={UnlockIcon} />
        </Menu>
    )),
];

export default createDocsSectionData({
    title: 'icon',
    items,
});
