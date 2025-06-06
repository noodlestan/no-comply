import { AnchoredPopover, Button } from '@no-comply/standard-ui';

import { createDocsItemData, createDocsSectionData } from '../../../../types';
import { itemProps as props } from '../constants';
import { ExamplePopoverContents } from '../examples';

export default createDocsSectionData({
	title: 'Basic usage',
	items: [
		createDocsItemData({ props }, () => {
			return (
				<AnchoredPopover trigger={trigger => <Button {...trigger}>Open popover</Button>}>
					{popover => <ExamplePopoverContents id={popover.id} />}
				</AnchoredPopover>
			);
		}),
	],
});
