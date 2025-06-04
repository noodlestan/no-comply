import { Button } from '@no-comply/standard-ui';

import { createDemoItem, createDemoSectionData } from '../../../../../../content';
import { itemProps as props } from '../constants';

export default createDemoSectionData({
    title: 'disabled',
    items: [createDemoItem({ props }, () => <Button disabled>Disabled</Button>)],
});
