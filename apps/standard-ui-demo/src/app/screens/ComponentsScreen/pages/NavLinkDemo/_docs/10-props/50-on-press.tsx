import type { PressEvent } from '@no-comply/solid-primitives';
import { NavLink } from '@no-comply/standard-ui';

import { LoremIpsum, createDemoItem, createDemoSectionData } from '../../../../../../content';
import { itemProps as props } from '../constants';

export default createDemoSectionData({
    title: 'onPress',
    items: [
        createDemoItem({ props }, () => {
            const handleOnPress = (ev: PressEvent) => {
                ev.preventDefault();
                console.info('Press');
            };

            return (
                <NavLink href="https://noodlestan.org" onPress={handleOnPress}>
                    <LoremIpsum words={2} />
                </NavLink>
            );
        }),
    ],
});
