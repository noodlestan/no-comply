import { AnchoredPopover, IconButton, Menu } from '@no-comply/standard-ui';
import MoreHorizontalIcon from 'lucide-solid/icons/more-horizontal';

import { createDocsItemData, createDocsSectionData } from '../../../../types';
import { itemProps as props } from '../constants';
import { ExampleExampleMenuItemContents } from '../examples';

export default createDocsSectionData({
	title: 'Basic usage',
	items: [
		createDocsItemData({ title: 'Triggered by AnchoredPopover', props }, () => (
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
