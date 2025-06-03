// _docs/10-props/30-size.tsx

import { IconButton } from '@no-comply/standard-ui';
import { PlusIcon } from 'lucide-solid';

import { createDemoItem, createDemoSection } from '../../../../../../components';

export default createDemoSection({
    title: 'size',
    items: [
        createDemoItem({ title: 'large', props: { row: true } }, () => (
            <IconButton icon={PlusIcon} label="Add an item" size="large" />
        )),
        createDemoItem({ title: 'medium', props: { row: true } }, () => (
            <IconButton icon={PlusIcon} label="Add an item" size="medium" />
        )),
        createDemoItem({ title: 'normal', props: { row: true } }, () => (
            <IconButton icon={PlusIcon} label="Add an item" size="normal" />
        )),
        createDemoItem({ title: 'small', props: { row: true } }, () => (
            <IconButton icon={PlusIcon} label="Add an item" size="small" />
        )),
    ],
});
