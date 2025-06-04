import { AnchoredPopover, Button } from '@no-comply/standard-ui';

import { createDemoItem, createDemoSectionData } from '../../../../../../content';
import { ExamplePopoverContents } from '../../examples';
import { itemProps as props } from '../constants';

export default createDemoSectionData({
    title: 'Basic usage',
    items: [
        createDemoItem({ props }, () => {
            return (
                <AnchoredPopover trigger={trigger => <Button {...trigger}>Open popover</Button>}>
                    {popover => <ExamplePopoverContents id={popover.id} />}
                </AnchoredPopover>
            );
        }),
    ],
});
