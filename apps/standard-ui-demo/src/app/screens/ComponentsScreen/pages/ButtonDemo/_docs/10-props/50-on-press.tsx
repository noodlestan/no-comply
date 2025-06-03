import type { PressEvent } from '@no-comply/solid-primitives';
import { Button } from '@no-comply/standard-ui';

import { createDemoItem, createDemoSection } from '../../../../../../components';

export default createDemoSection({
    title: 'onPress',
    items: [
        createDemoItem({ title: '', props: { row: true, note: 'see console log' } }, () => {
            const handlePress = (ev: PressEvent) => console.info(ev);
            return <Button onPress={handlePress}>Foobar</Button>;
        }),
    ],
});
