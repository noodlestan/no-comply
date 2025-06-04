import { Button, Popover } from '@no-comply/standard-ui';

import { createDemoItem, createDemoSectionData } from '../../../../../../content';
import { ExamplePopoverContents } from '../../examples';
import { itemProps as props } from '../constants';

const onShow = createDemoItem({ title: 'onShow', props }, () => {
    const handleOnShow = () => console.info('Show');

    return (
        <>
            <Button id="trigger-id" popoverTarget="popover-id" popoverTargetAction="show">
                Open popover
            </Button>
            <Popover id="popover-id" onShow={handleOnShow}>
                <ExamplePopoverContents id="popover-id" />
            </Popover>
        </>
    );
});

export default createDemoSectionData({
    title: 'onShow',
    items: [onShow],
});
