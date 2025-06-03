import { Icon } from '@no-comply/standard-ui';
import { ClockIcon } from 'lucide-solid';

import { createDemoItem, createDemoSection } from '../../../../../../components';

export default createDemoSection({
    title: 'recoloring',
    items: [
        createDemoItem({ title: 'Example', props: { row: true } }, () => (
            <div style={{ color: 'red' }}>
                <Icon icon={ClockIcon} />
            </div>
        )),
    ],
});
