import { IconButton } from '@no-comply/standard-ui';
import { PlusIcon } from 'lucide-solid';

import { createDemoItem, createDemoSection } from '../../../../../../components';

const handlePress = () => console.info('Press');

export default createDemoSection({
    title: 'onPress',
    items: [
        createDemoItem(
            {
                title: 'onPress',
                props: { row: true, note: 'see console log' },
            },
            () => <IconButton icon={PlusIcon} label="Add an item" onPress={handlePress} />,
        ),
    ],
});
