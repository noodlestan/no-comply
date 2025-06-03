import { Icon } from '@no-comply/standard-ui';
import { ClockIcon } from 'lucide-solid';

import { createDemoItem, createDemoSection } from '../../../../../../components';
import { itemProps as props } from '../constants';

export default createDemoSection({
    title: 'recoloring',
    items: [
        createDemoItem({ title: 'Example', props }, () => (
            <div style={{ color: 'red' }}>
                <Icon icon={ClockIcon} />
            </div>
        )),
    ],
});
