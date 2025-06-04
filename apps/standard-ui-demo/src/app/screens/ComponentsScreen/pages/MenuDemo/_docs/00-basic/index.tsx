import { AnchoredPopover, IconButton, Menu } from '@no-comply/standard-ui';
import { MoreHorizontalIcon } from 'lucide-solid';

import { createDemoItem, createDemoSectionData } from '../../../../../../content';
import { ExampleExampleMenuItemContents } from '../../examples';
import { itemProps as props } from '../constants';

export default createDemoSectionData({
    title: 'Basic usage',
    items: [
        createDemoItem({ title: 'Triggered by AnchoredPopover', props }, () => (
            <AnchoredPopover
                direction="inline"
                trigger={trigger => (
                    <IconButton icon={MoreHorizontalIcon} label="More options" {...trigger} />
                )}
            >
                {content => (
                    <Menu aria-labelledby={content['aria-labelledby']}>
                        <ExampleExampleMenuItemContents />
                    </Menu>
                )}
            </AnchoredPopover>
        )),
    ],
});
