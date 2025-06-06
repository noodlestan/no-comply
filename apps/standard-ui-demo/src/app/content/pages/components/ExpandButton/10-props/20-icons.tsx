import { createIconValue } from '@no-comply/solid-contexts';
import { ExpandButton, Label } from '@no-comply/standard-ui';
import { FolderClosed, FolderOpen } from 'lucide-solid';

import { createDocsItemData, createDocsSectionData } from '../../../../types';
import { itemProps as props } from '../constants';
import { createExpandButtonExampleController } from '../controllers';

const icons = createDocsItemData({ props }, () => {
	const { expanded, expandedText, labels, id, toggleExpanded } =
		createExpandButtonExampleController();

	const icons = {
		expanded: createIconValue(FolderOpen),
		collapsed: createIconValue(FolderClosed),
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
});

export default createDocsSectionData({
	title: 'icons',
	items: [icons],
});
