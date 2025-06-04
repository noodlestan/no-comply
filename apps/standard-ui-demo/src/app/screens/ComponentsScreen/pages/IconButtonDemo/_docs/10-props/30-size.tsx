import { IconButton } from '@no-comply/standard-ui';
import { PlusIcon } from 'lucide-solid';

import { createDemoItem, createDemoSectionData } from '../../../../../../components';
import { itemProps as props } from '../constants';

export default createDemoSectionData({
    title: 'size',
    items: [
        createDemoItem({ title: 'large', props }, () => (
            <IconButton icon={PlusIcon} label="Add an item" size="large" />
        )),
        createDemoItem({ title: 'medium', props }, () => (
            <IconButton icon={PlusIcon} label="Add an item" size="medium" />
        )),
        createDemoItem({ title: 'normal', props: { ...props, defaultValue: true } }, () => (
            <IconButton icon={PlusIcon} label="Add an item" size="normal" />
        )),
        createDemoItem({ title: 'small', props }, () => (
            <IconButton icon={PlusIcon} label="Add an item" size="small" />
        )),
    ],
});
