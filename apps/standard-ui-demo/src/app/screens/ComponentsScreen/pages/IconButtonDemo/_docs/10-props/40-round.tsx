import { IconButton } from '@no-comply/standard-ui';
import { PlusIcon } from 'lucide-solid';

import { createDemoItem, createDemoSection } from '../../../../../../components';
import { itemProps as props } from '../constants';

export default createDemoSection({
    title: 'round',
    items: [
        createDemoItem({ title: 'true / large size', props }, () => (
            <IconButton icon={PlusIcon} label="Add an item" size="large" round />
        )),
        createDemoItem({ title: 'true / medium size', props }, () => (
            <IconButton icon={PlusIcon} label="Add an item" size="medium" round />
        )),
        createDemoItem({ title: 'true / normal size', props }, () => (
            <IconButton icon={PlusIcon} label="Add an item" size="normal" round />
        )),
        createDemoItem({ title: 'true / small size', props }, () => (
            <IconButton icon={PlusIcon} label="Add an item" size="small" round />
        )),
    ],
});
