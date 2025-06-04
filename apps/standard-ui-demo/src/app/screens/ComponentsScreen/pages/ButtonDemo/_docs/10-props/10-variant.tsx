import { Button } from '@no-comply/standard-ui';

import { createDemoItem, createDemoSectionData } from '../../../../../../content';
import { itemProps as props } from '../constants';

const items = [
    createDemoItem({ title: 'primary', props }, () => (
        <>
            <Button variant="primary">Primary</Button>
            <Button variant="primary" disabled>
                Disabled
            </Button>
        </>
    )),
    createDemoItem({ title: 'secondary', props: { ...props, defaultValue: true } }, () => (
        <>
            <Button variant="secondary">Secondary</Button>
            <Button variant="secondary" disabled>
                Disabled
            </Button>
        </>
    )),
    createDemoItem({ title: 'plain', props }, () => (
        <>
            <Button variant="plain">Plain</Button>
            <Button variant="plain" disabled>
                Disabled
            </Button>
        </>
    )),
];

export default createDemoSectionData({
    title: 'variant',
    items,
});
