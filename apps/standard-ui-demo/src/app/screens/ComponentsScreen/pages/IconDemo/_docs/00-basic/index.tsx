import { Icon } from '@no-comply/standard-ui';
import { ClockIcon } from 'lucide-solid';

import { createDemoItem, createDemoSectionData } from '../../../../../../content';
import { itemProps as props } from '../constants';

export default createDemoSectionData({
    title: 'Basic usage',
    items: [createDemoItem({ title: 'Default', props }, () => <Icon icon={ClockIcon} />)],
});
