import { Button } from '@no-comply/standard-ui';

import { createDemoItem, createDemoSectionData } from '../../../../../../components';
import { itemProps as props } from '../constants';

export default createDemoSectionData({
    title: 'disabled',
    items: [createDemoItem({ title: 'true', props }, () => <Button disabled>Disabled</Button>)],
});
