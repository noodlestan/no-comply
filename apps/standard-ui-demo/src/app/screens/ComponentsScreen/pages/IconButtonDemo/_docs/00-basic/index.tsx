import { IconButton } from '@no-comply/standard-ui';
import { PlusIcon } from 'lucide-solid';

import { createDemoItem, createDemoSectionData } from '../../../../../../content';
import { itemProps as props } from '../constants';

export default createDemoSectionData({
    title: 'Basic usage',
    items: [createDemoItem({ props }, () => <IconButton icon={PlusIcon} label="And an item" />)],
});
