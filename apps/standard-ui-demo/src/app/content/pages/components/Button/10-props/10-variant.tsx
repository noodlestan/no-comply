import { Button } from '@no-comply/standard-ui';

import { createDocsItemData, createDocsSectionData } from '../../../../types';
import { itemProps as props } from '../constants';

const items = [
    createDocsItemData({ title: 'primary', props }, () => (
        <>
            <Button variant="primary">Primary</Button>
            <Button variant="primary" disabled>
                Disabled
            </Button>
        </>
    )),
    createDocsItemData({ title: 'secondary', props: { ...props, defaultValue: true } }, () => (
        <>
            <Button variant="secondary">Secondary</Button>
            <Button variant="secondary" disabled>
                Disabled
            </Button>
        </>
    )),
    createDocsItemData({ title: 'plain', props }, () => (
        <>
            <Button variant="plain">Plain</Button>
            <Button variant="plain" disabled>
                Disabled
            </Button>
        </>
    )),
];

export default createDocsSectionData({
    title: 'variant',
    items,
});
