import { Button, Icon } from '@no-comply/standard-ui';
import { UnlockIcon } from 'lucide-solid';

import { createDemoItem, createDemoSection } from '../../../../../../components';

export default createDemoSection({
    title: 'Basic usage',
    items: [
        createDemoItem(
            {
                title: 'With a text label',
                props: { row: true },
            },
            () => <Button>View more items</Button>,
        ),
        createDemoItem(
            {
                title: 'With icon and label',
                props: { row: true },
            },
            () => (
                <Button>
                    <Icon icon={UnlockIcon} size="small" />
                    Sign out
                </Button>
            ),
        ),
    ],
});
