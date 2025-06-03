import { Button } from '@no-comply/standard-ui';

import { createDemoItem, createDemoSection } from '../../../../../../components';

const items = [
    createDemoItem(
        {
            title: 'primary',
            props: { row: true, gap: 'l' },
        },
        () => (
            <>
                <Button variant="primary">Primary</Button>
                <Button variant="primary" disabled>
                    Disabled
                </Button>
            </>
        ),
    ),
    createDemoItem(
        {
            title: 'secondary',
            props: { row: true, gap: 'l' },
        },
        () => (
            <>
                <Button variant="secondary">Secondary</Button>
                <Button variant="secondary" disabled>
                    Disabled
                </Button>
            </>
        ),
    ),
    createDemoItem(
        {
            title: 'plain',
            props: { row: true, gap: 'l' },
        },
        () => (
            <>
                <Button variant="plain">Plain</Button>
                <Button variant="plain" disabled>
                    Disabled
                </Button>
            </>
        ),
    ),
];

export default createDemoSection({
    title: 'variant',
    items,
});
