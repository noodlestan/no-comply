import { Button } from '@no-comply/standard-ui';

import { createDemoItem, createDemoSection } from '../../../../../../components';

export default createDemoSection({
    title: 'size',
    items: [
        createDemoItem({ title: 'large', props: { row: true } }, () => (
            <Button size="large">Size Large</Button>
        )),
        createDemoItem({ title: 'medium', props: { row: true } }, () => (
            <Button size="medium">Size Medium</Button>
        )),
        createDemoItem({ title: 'normal', props: { row: true } }, () => (
            <Button size="normal">Size Normal</Button>
        )),
        createDemoItem({ title: 'small', props: { row: true } }, () => (
            <Button size="small">Size Small</Button>
        )),
    ],
});
