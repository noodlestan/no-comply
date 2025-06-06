import { Icon } from '@no-comply/standard-ui';
import { ClockIcon } from 'lucide-solid';

import { createDocsItemData, createDocsSectionData } from '../../../../types';
import { itemProps as props } from '../constants';

export default createDocsSectionData({
    title: 'recoloring',
    items: [
        createDocsItemData({ title: 'Example', props }, () => (
            <div style={{ color: 'red' }}>
                <Icon icon={ClockIcon} />
            </div>
        )),
    ],
});
