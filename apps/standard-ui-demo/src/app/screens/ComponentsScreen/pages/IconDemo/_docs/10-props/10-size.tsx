import { Icon } from '@no-comply/standard-ui';
import { ClockIcon } from 'lucide-solid';

import { createDemoItem, createDemoSectionData } from '../../../../../../content';
import { itemProps as props } from '../constants';

export default createDemoSectionData({
    title: 'size',
    items: [
        createDemoItem({ title: 'large', props }, () => <Icon icon={ClockIcon} size="large" />),
        createDemoItem({ title: 'medium', props }, () => <Icon icon={ClockIcon} size="medium" />),
        createDemoItem({ title: 'normal', props }, () => <Icon icon={ClockIcon} size="normal" />),
        createDemoItem({ title: 'small', props }, () => <Icon icon={ClockIcon} size="small" />),
    ],
});
