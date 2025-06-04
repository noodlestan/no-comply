import { Divider } from '@no-comply/standard-ui';

import { createDemoItem, createDemoSectionData } from '../../../../../../components';
import { itemProps as props } from '../constants';

export default createDemoSectionData({
    title: 'variant',
    items: [
        createDemoItem({ title: 'base', props }, () => <Divider variant="base" />),
        createDemoItem({ title: 'alt', props }, () => <Divider variant="alt" />),
        createDemoItem({ title: 'strong', props }, () => <Divider variant="strong" />),
        createDemoItem({ title: 'muted', props }, () => <Divider variant="muted" />),
    ],
});
