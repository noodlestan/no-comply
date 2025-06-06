import { Button, Popover } from '@no-comply/standard-ui';

import { createDocsItemData, createDocsSectionData } from '../../../../types';
import { itemProps as props } from '../constants';
import { ExamplePopoverContents } from '../examples';

const onShow = createDocsItemData({ title: 'onShow', props }, () => {
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

export default createDocsSectionData({
    title: 'onShow',
    items: [onShow],
});
