import type { PressEvent } from '@no-comply/solid-primitives';
import { Menu, MenuItemAction } from '@no-comply/standard-ui';

import { createDemoItem, createDemoSectionData } from '../../../../../../content';
import { itemProps as props } from '../constants';

export default createDemoSectionData({
    title: 'onPress',
    items: [
        createDemoItem(
            { title: 'event handler', props: { ...props, note: 'see console log' } },
            () => {
                const handlePress = (ev: PressEvent) => console.info(ev);
                return (
                    <Menu aria-label="foo">
                        <MenuItemAction label="Select items" onPress={handlePress} />
                    </Menu>
                );
            },
        ),
    ],
});
