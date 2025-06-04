// _docs/10-props/50-disabled.tsx

import { IconButton } from '@no-comply/standard-ui';
import { PlusIcon } from 'lucide-solid';

import { createDemoItem, createDemoSectionData } from '../../../../../../content';

export default createDemoSectionData({
    title: 'disabled',
    items: [
        createDemoItem({ title: 'true', props: { row: true } }, () => (
            <IconButton icon={PlusIcon} label="Add an item" disabled />
        )),
    ],
});
