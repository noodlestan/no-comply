import { Menu, MenuItemAction } from '@no-comply/standard-ui';

import { createDemoItem, createDemoSectionData, lipsumWords } from '../../../../../../content';
import { itemProps as props } from '../constants';

const items = [
    createDemoItem({ props }, () => (
        <Menu aria-label="foo">
            <MenuItemAction label="Unlock items" description={lipsumWords(9)} />
        </Menu>
    )),
];

export default createDemoSectionData({
    title: 'description',
    items,
});
