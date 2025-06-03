// _docs/10-props/40-round.tsx

import { IconButton } from '@no-comply/standard-ui';
import { PlusIcon } from 'lucide-solid';

import { createDemoItem, createDemoSection } from '../../../../../../components';

export default createDemoSection({
    title: 'round',
    items: [
        createDemoItem({ title: 'true / large size', props: { row: true } }, () => (
            <IconButton icon={PlusIcon} label="Add an item" size="large" round />
        )),
        createDemoItem({ title: 'true / medium size', props: { row: true } }, () => (
            <IconButton icon={PlusIcon} label="Add an item" size="medium" round />
        )),
        createDemoItem({ title: 'true / normal size', props: { row: true } }, () => (
            <IconButton icon={PlusIcon} label="Add an item" size="normal" round />
        )),
        createDemoItem({ title: 'true / small size', props: { row: true } }, () => (
            <IconButton icon={PlusIcon} label="Add an item" size="small" round />
        )),
    ],
});
