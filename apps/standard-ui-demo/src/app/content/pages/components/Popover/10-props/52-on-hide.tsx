import { Button, Popover } from '@no-comply/standard-ui';

import { createDocsItemData, createDocsSectionData } from '../../../../types';
import { itemProps as props } from '../constants';
import { ExamplePopoverContents } from '../examples';

export default createDocsSectionData({
	title: 'onHide',
	items: [
		createDocsItemData({ title: 'onHide', props }, () => {
			const handleOnHide = () => console.info('Hide');

			return (
				<>
					<Button id="trigger-id" popoverTarget="popover-id" popoverTargetAction="show">
						Open popover
					</Button>
					<Popover id="popover-id" onHide={handleOnHide}>
						<ExamplePopoverContents id="popover-id" />
					</Popover>
				</>
			);
		}),
	],
});
