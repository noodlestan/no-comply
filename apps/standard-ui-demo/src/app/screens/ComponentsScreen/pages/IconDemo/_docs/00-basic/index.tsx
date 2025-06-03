import { Icon } from '@no-comply/standard-ui';
import { ClockIcon } from 'lucide-solid';

import { createDemoItem, createDemoSection } from '../../../../../../components';
import { itemProps as props } from '../constants';

export default createDemoSection({
    title: 'Basic usage',
    items: [createDemoItem({ title: 'Default', props }, () => <Icon icon={ClockIcon} />)],
});
