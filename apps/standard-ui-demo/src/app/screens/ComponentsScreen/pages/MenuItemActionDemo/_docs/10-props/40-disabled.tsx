import { Menu, MenuItemAction } from '@no-comply/standard-ui';
import { UnlockIcon } from 'lucide-solid';

import { createDemoItem, createDemoSectionData } from '../../../../../../content';
import { itemProps as props } from '../constants';

export default createDemoSectionData({
    title: 'disabled',
    items: [
        createDemoItem({ props }, () => (
            <Menu aria-label="foo">
                <MenuItemAction label="Unlock items" icon={UnlockIcon} disabled />
            </Menu>
        )),
    ],
});
