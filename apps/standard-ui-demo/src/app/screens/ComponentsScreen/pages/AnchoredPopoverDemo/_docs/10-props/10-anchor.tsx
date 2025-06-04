import { AnchoredPopover, Button } from '@no-comply/standard-ui';

import { createDemoItem, createDemoSectionData } from '../../../../../../content';
import { ExamplePopoverContents } from '../../examples';
import { itemProps as props } from '../constants';

const startEnd = createDemoItem(
    { title: 'start-end', props: { ...props, note: 'default value for block direction' } },
    () => (
        <AnchoredPopover
            direction="inline"
            anchor="start-end"
            trigger={trigger => <Button {...trigger}>Open popover</Button>}
        >
            {popover => <ExamplePopoverContents id={popover.id} />}
        </AnchoredPopover>
    ),
);

const startStart = createDemoItem({ title: 'start-start', props }, () => (
    <AnchoredPopover
        anchor="start-start"
        trigger={trigger => <Button {...trigger}>Open popover</Button>}
    >
        {popover => <ExamplePopoverContents id={popover.id} />}
    </AnchoredPopover>
));

const centerEnd = createDemoItem(
    { title: 'end-start', props: { ...props, note: 'default value for block direction' } },
    () => (
        <AnchoredPopover
            anchor="end-start"
            direction="block"
            trigger={trigger => <Button {...trigger}>Open popover</Button>}
        >
            {popover => <ExamplePopoverContents id={popover.id} />}
        </AnchoredPopover>
    ),
);

export default createDemoSectionData({
    title: 'anchor',
    items: [startEnd, startStart, centerEnd],
});
