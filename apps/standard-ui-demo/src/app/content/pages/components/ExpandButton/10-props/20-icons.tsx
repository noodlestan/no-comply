import { createIconValue } from '@no-comply/solid-contexts';
import { ExpandButton, Label } from '@no-comply/standard-ui';
import FolderClosedIcon from 'lucide-solid/icons/folder-closed';
import FolderOpenIcon from 'lucide-solid/icons/folder-open';

import { createDocsItemData, createDocsSectionData } from '../../../../types';
import { itemProps as props } from '../constants';
import { createExpandButtonExampleController } from '../controllers';

export default createDocsSectionData({
	title: 'icons',
	items: [
		createDocsItemData({ props }, () => {
			const { expanded, expandedText, labels, id, toggleExpanded } =
				createExpandButtonExampleController();

			const icons = {
				expanded: createIconValue(FolderOpenIcon),
				collapsed: createIconValue(FolderClosedIcon),
			};

			return (
				<>
					<ExpandButton
						expanded={expanded()}
						labels={labels}
						icons={icons}
						controls={id}
						onPress={toggleExpanded}
					/>
					<Label id={id}>{expandedText()}</Label>
				</>
			);
		}),
	],
});
