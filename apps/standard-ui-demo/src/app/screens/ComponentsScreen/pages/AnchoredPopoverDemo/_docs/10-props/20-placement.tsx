import { AnchoredPopover, Button } from '@no-comply/standard-ui';

import { createDemoItem, createDemoSectionData } from '../../../../../../content';
import { ExamplePopoverContents } from '../../examples';
import { itemProps as props } from '../constants';

const placement = createDemoItem({ title: 'corners', props }, () => (
    <AnchoredPopover
        placement={[
            ['end-end', 'start-start'],
            ['start-start', 'end-end'],
        ]}
        trigger={trigger => <Button {...trigger}>Open popover</Button>}
    >
        {popover => <ExamplePopoverContents id={popover.id} />}
    </AnchoredPopover>
));

export default createDemoSectionData({
    title: 'placement',
    items: [placement],
});
