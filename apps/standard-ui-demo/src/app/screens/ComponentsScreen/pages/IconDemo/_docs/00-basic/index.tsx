import { Icon } from '@no-comply/standard-ui';
import { ClockIcon } from 'lucide-solid';

import { createDemoItem, createDemoSection } from '../../../../../../components';

export default createDemoSection({
    title: 'Basic usage',
    items: [
        createDemoItem({ title: 'Default', props: { row: true } }, () => <Icon icon={ClockIcon} />),
    ],
});
