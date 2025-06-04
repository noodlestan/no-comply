import { IconButton } from '@no-comply/standard-ui';
import { PlusIcon } from 'lucide-solid';

import { createDemoItem, createDemoSectionData } from '../../../../../../components';
import { itemProps as props } from '../constants';

export default createDemoSectionData({
    title: 'basic',
    items: [
        createDemoItem({ title: '', props }, () => (
            <IconButton icon={PlusIcon} label="And an item" />
        )),
    ],
});
