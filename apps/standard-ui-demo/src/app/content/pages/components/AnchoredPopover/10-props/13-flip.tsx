import { AnchoredPopover, Button } from '@no-comply/standard-ui';

import { createDocsItemData, createDocsSectionData } from '../../../../types';
import { itemProps as props } from '../constants';
import { ExamplePopoverContents } from '../examples';

const inline = createDocsItemData({ title: 'inline', props }, () => (
	<AnchoredPopover
		anchor="start-end"
		direction="inline"
		flip="block"
		trigger={trigger => <Button {...trigger}>Open popover</Button>}
	>
		{popover => <ExamplePopoverContents id={popover.id} />}
	</AnchoredPopover>
));

const block = createDocsItemData(
	{ title: 'block', props: { ...props, defaultValue: true } },
	() => (
		<AnchoredPopover
			anchor="start-end"
			direction="inline"
			flip="block"
			trigger={trigger => <Button {...trigger}>Open popover</Button>}
		>
			{popover => <ExamplePopoverContents id={popover.id} />}
		</AnchoredPopover>
	),
);

export default createDocsSectionData({
	title: 'flip',
	items: [inline, block],
});
