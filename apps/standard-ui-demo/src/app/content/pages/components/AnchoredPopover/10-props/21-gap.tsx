import { AnchoredPopover, Button } from '@no-comply/standard-ui';

import { createDocsItemData, createDocsSectionData } from '../../../../types';
import { itemProps as props } from '../constants';
import { ExamplePopoverContents } from '../examples';

const variable = createDocsItemData({ title: 'variable gap', props }, () => (
    <AnchoredPopover
        anchor="start-end"
        direction="inline"
        flip="inline"
        gap="var(--space-gap-2)"
        trigger={trigger => <Button {...trigger}>Open popover</Button>}
    >
        {popover => <ExamplePopoverContents id={popover.id} />}
    </AnchoredPopover>
));

export default createDocsSectionData({
    title: 'gap',
    items: [variable],
});
