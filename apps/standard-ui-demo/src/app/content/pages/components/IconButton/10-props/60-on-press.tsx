import { IconButton } from '@no-comply/standard-ui';
import { PlusIcon } from 'lucide-solid';

import { createDocsItemData, createDocsSectionData } from '../../../../types';
import { itemProps as props } from '../constants';

const handlePress = () => console.info('Press');

export default createDocsSectionData({
    title: 'onPress',
    items: [
        createDocsItemData(
            { title: 'onPress', props: { ...props, note: 'see console log' } },
            () => <IconButton icon={PlusIcon} label="Add an item" onPress={handlePress} />,
        ),
    ],
});
