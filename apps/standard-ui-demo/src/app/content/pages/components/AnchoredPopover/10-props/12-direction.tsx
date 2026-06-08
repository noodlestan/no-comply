import { AnchoredPopover, Button } from '@no-comply/standard-ui';

import { type DocsSectionData, createDocsItemData, createDocsSectionData } from '../../../../types';
import { itemProps as props } from '../constants';
import { ExamplePopoverContents } from '../examples';

export default function (): DocsSectionData {
	return createDocsSectionData({
		title: 'direction',
		collapse: true,
		items: [
			createDocsItemData({ title: 'inline', props }, () => (
				<AnchoredPopover
					anchor="start-end"
					direction="inline"
					trigger={trigger => <Button {...trigger}>Open popover</Button>}
				>
					{popover => <ExamplePopoverContents id={popover.id} />}
				</AnchoredPopover>
			)),
			createDocsItemData({ title: 'block', props: { ...props, defaultValue: true } }, () => (
				<AnchoredPopover
					anchor="start-end"
					direction="block"
					trigger={trigger => <Button {...trigger}>Open popover</Button>}
				>
					{popover => <ExamplePopoverContents id={popover.id} />}
				</AnchoredPopover>
			)),
		],
	});
}
