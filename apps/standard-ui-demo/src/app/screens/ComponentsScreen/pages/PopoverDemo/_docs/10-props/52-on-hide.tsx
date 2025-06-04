import { Button, Popover } from '@no-comply/standard-ui';

import { createDemoItem, createDemoSectionData } from '../../../../../../content';
import { ExamplePopoverContents } from '../../examples';
import { itemProps as props } from '../constants';

const onHide = createDemoItem({ title: 'onHide gap', props }, () => {
    const handleOnHide = () => console.info('Hide');

    return (
        <>
            <Button id="trigger-id" popoverTarget="popover-id" popoverTargetAction="show">
                Open popover
            </Button>
            <Popover id="popover-id" onHide={handleOnHide}>
                <ExamplePopoverContents id="popover-id" />
            </Popover>
        </>
    );
});

export default createDemoSectionData({
    title: 'onHide',
    items: [onHide],
});
