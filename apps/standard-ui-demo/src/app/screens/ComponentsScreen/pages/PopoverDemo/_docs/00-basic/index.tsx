import { Button, Popover } from '@no-comply/standard-ui';

import { createDemoItem, createDemoSectionData } from '../../../../../../content';
import { ExamplePopoverContents } from '../../examples';
import { itemProps as props } from '../constants';

export default createDemoSectionData({
    title: 'Basic usage',
    items: [
        createDemoItem({ props }, () => {
            return (
                <>
                    <Button id="trigger-id" popoverTarget="popover-id" popoverTargetAction="show">
                        Open popover
                    </Button>
                    <Popover id="popover-id">
                        <ExamplePopoverContents id="popover-id" />
                    </Popover>
                </>
            );
        }),
    ],
});
