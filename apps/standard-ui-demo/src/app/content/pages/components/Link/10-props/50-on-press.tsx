import type { PressEvent } from '@no-comply/solid-primitives';
import { Link } from '@no-comply/standard-ui';

import { createDocsItemData, createDocsSectionData } from '../../../../types';
import { itemProps as props } from '../constants';

export default createDocsSectionData({
    title: 'onPress',
    items: [
        createDocsItemData({ props }, () => {
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
