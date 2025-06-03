import { Button } from '@no-comply/standard-ui';

import { createDemoItem, createDemoSection } from '../../../../../../components';

export default createDemoSection({
    title: 'disabled',
    items: [
        createDemoItem({ title: '', props: { row: true } }, () => (
            <Button disabled>Disabled</Button>
        )),
    ],
});
