import { AnchoredPopover, Button } from '@no-comply/standard-ui';

import { type DocsSectionData, createDocsItemData, createDocsSectionData } from '../../../../types';
import { itemProps as props } from '../constants';
import { ExamplePopoverContents } from '../examples';

export default function (): DocsSectionData {
	return createDocsSectionData({
		title: 'anchor',
		collapse: true,
		items: [
			createDocsItemData(
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
			),
			createDocsItemData({ title: 'start-start', props }, () => (
				<AnchoredPopover
					anchor="start-start"
					trigger={trigger => <Button {...trigger}>Open popover</Button>}
				>
					{popover => <ExamplePopoverContents id={popover.id} />}
				</AnchoredPopover>
			)),
			createDocsItemData(
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
			),
		],
	});
}
