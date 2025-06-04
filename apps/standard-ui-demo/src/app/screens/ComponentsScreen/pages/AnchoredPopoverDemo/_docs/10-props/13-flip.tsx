import { AnchoredPopover, Button } from '@no-comply/standard-ui';

import { createDemoItem, createDemoSectionData } from '../../../../../../content';
import { ExamplePopoverContents } from '../../examples';
import { itemProps as props } from '../constants';

const inline = createDemoItem({ title: 'inline', props }, () => (
    <AnchoredPopover
        anchor="start-end"
        direction="inline"
        flip="block"
        trigger={trigger => <Button {...trigger}>Open popover</Button>}
    >
        {popover => <ExamplePopoverContents id={popover.id} />}
    </AnchoredPopover>
));

const block = createDemoItem({ title: 'block', props: { ...props, defaultValue: true } }, () => (
    <AnchoredPopover
        anchor="start-end"
        direction="inline"
        flip="block"
        trigger={trigger => <Button {...trigger}>Open popover</Button>}
    >
        {popover => <ExamplePopoverContents id={popover.id} />}
    </AnchoredPopover>
));

export default createDemoSectionData({
    title: 'flip',
    items: [inline, block],
});
