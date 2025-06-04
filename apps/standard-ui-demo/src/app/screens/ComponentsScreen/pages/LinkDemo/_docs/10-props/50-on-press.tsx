import type { PressEvent } from '@no-comply/solid-primitives';
import { Link } from '@no-comply/standard-ui';

import { createDemoItem, createDemoSectionData } from '../../../../../../content';
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
                <Link href="https://noodlestan.org" onPress={handleOnPress}>
                    Noodlestan Collective
                </Link>
            );
        }),
    ],
});
