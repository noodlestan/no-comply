// _docs/10-props/50-disabled.tsx

import { IconButton } from '@no-comply/standard-ui';
import { PlusIcon } from 'lucide-solid';

import { createDocsItemData, createDocsSectionData } from '../../../../types';

export default createDocsSectionData({
    title: 'disabled',
    items: [
        createDocsItemData({ props: { row: true } }, () => (
            <IconButton icon={PlusIcon} label="Add an item" disabled />
        )),
    ],
});
