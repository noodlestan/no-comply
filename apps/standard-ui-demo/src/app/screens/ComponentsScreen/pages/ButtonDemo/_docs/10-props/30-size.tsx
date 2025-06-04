import { Button } from '@no-comply/standard-ui';

import { createDemoItem, createDemoSectionData } from '../../../../../../content';
import { itemProps as props } from '../constants';

export default createDemoSectionData({
    title: 'size',
    items: [
        createDemoItem({ title: 'large', props }, () => <Button size="large">Size Large</Button>),
        createDemoItem({ title: 'medium', props }, () => (
            <Button size="medium">Size Medium</Button>
        )),
        createDemoItem({ title: 'normal', props: { ...props, defaultValue: true } }, () => (
            <Button size="normal">Size Normal</Button>
        )),
        createDemoItem({ title: 'small', props }, () => <Button size="small">Size Small</Button>),
    ],
});
