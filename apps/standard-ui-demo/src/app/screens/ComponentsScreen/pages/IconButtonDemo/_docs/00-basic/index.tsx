import { IconButton } from '@no-comply/standard-ui';
import { PlusIcon } from 'lucide-solid';

import { createDemoItem, createDemoSection } from '../../../../../../components';
import { itemProps as props } from '../constants';

export default createDemoSection({
    title: 'basic',
    items: [
        createDemoItem({ title: '', props }, () => (
            <IconButton icon={PlusIcon} label="And an item" />
        )),
    ],
});
