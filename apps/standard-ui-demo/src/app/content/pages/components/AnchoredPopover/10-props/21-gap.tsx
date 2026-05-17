import { AnchoredPopover, Button } from '@no-comply/standard-ui';

import { type DocsSectionData, createDocsItemData, createDocsSectionData } from '../../../../types';
import { itemProps as props } from '../constants';
import { ExamplePopoverContents } from '../examples';

export default function (): DocsSectionData {
	return createDocsSectionData({
		title: 'gap',
		items: [
			createDocsItemData({ title: 'variable gap', props }, () => (
				<AnchoredPopover
					anchor="start-end"
					direction="inline"
					flip="inline"
					gap="var(--space-gap-2)"
					trigger={trigger => <Button {...trigger}>Open popover</Button>}
				>
					{popover => <ExamplePopoverContents id={popover.id} />}
				</AnchoredPopover>
			)),
		],
	});
}
