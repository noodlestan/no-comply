import type { PressEvent } from '@no-comply/solid-primitives';
import { Button } from '@no-comply/standard-ui';

import { createDemoItem, createDemoSectionData } from '../../../../../../components';
import { itemProps as props } from '../constants';

export default createDemoSectionData({
    title: 'onPress',
    items: [
        createDemoItem(
            { title: 'event handler', props: { ...props, note: 'see console log' } },
            () => {
                const handlePress = (ev: PressEvent) => console.info(ev);
                return <Button onPress={handlePress}>Foobar</Button>;
            },
        ),
    ],
});
