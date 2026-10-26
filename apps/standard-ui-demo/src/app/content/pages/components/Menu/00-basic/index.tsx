import { AnchoredPopover, IconButton, Menu } from '@no-comply/standard-ui';
import EllipsisIcon from 'lucide-solid/icons/ellipsis';

import { createDocsItemData, createDocsSectionData } from '../../../../types';
import { itemProps as props } from '../constants';
import { ExampleExampleMenuItemContents } from '../examples';

export default createDocsSectionData({
	title: 'Basic usage',
	items: [
		createDocsItemData({ title: 'Triggered by AnchoredPopover', props }, () => (
			<AnchoredPopover
				direction="inline"
				trigger={trigger => <IconButton icon={EllipsisIcon} label="More options" {...trigger} />}
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
