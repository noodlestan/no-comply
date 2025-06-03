import { Button } from '@no-comply/standard-ui';

import { createDemoItem, createDemoSection } from '../../../../../../components';
import { itemProps as props } from '../constants';

export default createDemoSection({
    title: 'disabled',
    items: [createDemoItem({ title: 'true', props }, () => <Button disabled>Disabled</Button>)],
});
