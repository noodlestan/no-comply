import { AnchoredPopover, Button } from '@no-comply/standard-ui';

import { createDocsItemData, createDocsSectionData } from '../../../../types';
import { itemProps as props } from '../constants';
import { ExamplePopoverContents } from '../examples';

const startEnd = createDocsItemData(
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

const startStart = createDocsItemData({ title: 'start-start', props }, () => (
    <AnchoredPopover
        anchor="start-start"
        trigger={trigger => <Button {...trigger}>Open popover</Button>}
    >
        {popover => <ExamplePopoverContents id={popover.id} />}
    </AnchoredPopover>
));

const centerEnd = createDocsItemData(
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

export default createDocsSectionData({
    title: 'anchor',
    items: [startEnd, startStart, centerEnd],
});
