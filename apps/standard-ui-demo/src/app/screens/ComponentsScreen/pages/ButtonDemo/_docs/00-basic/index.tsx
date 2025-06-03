import { Button, Icon } from '@no-comply/standard-ui';
import { UnlockIcon } from 'lucide-solid';

import { createDemoItem, createDemoSection } from '../../../../../../components';
import { itemProps as props } from '../constants';

export default createDemoSection({
    title: 'Basic usage',
    items: [
        createDemoItem({ title: 'With a text label', props }, () => (
            <Button>View more items</Button>
        )),
        createDemoItem({ title: 'With icon and label', props }, () => (
            <Button>
                <Icon icon={UnlockIcon} size="small" />
                Sign out
            </Button>
        )),
    ],
});
