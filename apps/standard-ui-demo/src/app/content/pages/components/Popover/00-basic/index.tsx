import { Button, Popover } from '@no-comply/standard-ui';

import { createDocsItemData, createDocsSectionData } from '../../../../types';
import { itemProps as props } from '../constants';
import { ExamplePopoverContents } from '../examples';

export default createDocsSectionData({
    title: 'Basic usage',
    items: [
        createDocsItemData({ props }, () => {
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
