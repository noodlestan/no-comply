import { Menu, MenuItemAction } from '@no-comply/standard-ui';
import { UnlockIcon } from 'lucide-solid';

import { createDemoItem, createDemoSectionData } from '../../../../../../content';
import { itemProps as props } from '../constants';

export default createDemoSectionData({
    title: 'Basic usage',
    items: [
        createDemoItem({ title: 'With a text label', props }, () => (
            <Menu aria-label="foo">
                <MenuItemAction label="Select All" />
            </Menu>
        )),
        createDemoItem({ title: 'With an icon', props }, () => (
            <Menu aria-label="foo">
                <MenuItemAction label="Unlock items" icon={UnlockIcon} />
            </Menu>
        )),
    ],
});
