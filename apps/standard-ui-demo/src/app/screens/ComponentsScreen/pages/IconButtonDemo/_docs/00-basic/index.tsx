import { IconButton } from '@no-comply/standard-ui';
import { PlusIcon } from 'lucide-solid';

import { createDemoItem, createDemoSection } from '../../../../../../components';

export default createDemoSection({
    title: 'basic',
    items: [
        createDemoItem({ title: '', props: { row: true } }, () => (
            <IconButton icon={PlusIcon} label="And an item" />
        )),
    ],
});
