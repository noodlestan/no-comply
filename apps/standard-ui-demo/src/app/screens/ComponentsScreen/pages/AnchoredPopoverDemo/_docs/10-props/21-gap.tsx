import { AnchoredPopover, Button } from '@no-comply/standard-ui';

import { createDemoItem, createDemoSectionData } from '../../../../../../content';
import { ExamplePopoverContents } from '../../examples';
import { itemProps as props } from '../constants';

const variable = createDemoItem({ title: 'variable gap', props }, () => (
    <AnchoredPopover
        anchor="start-end"
        direction="inline"
        flip="inline"
        gap="var(--space-gap-2)"
        trigger={trigger => <Button {...trigger}>Open popover</Button>}
    >
        {popover => <ExamplePopoverContents id={popover.id} />}
    </AnchoredPopover>
));

export default createDemoSectionData({
    title: 'gap',
    items: [variable],
});
