import { Icon } from '@no-comply/standard-ui';
import { ClockIcon } from 'lucide-solid';

import { createDemoItem, createDemoSectionData } from '../../../../../../components';
import { itemProps as props } from '../constants';

export default createDemoSectionData({
    title: 'recoloring',
    items: [
        createDemoItem({ title: 'Example', props }, () => (
            <div style={{ color: 'red' }}>
                <Icon icon={ClockIcon} />
            </div>
        )),
    ],
});
