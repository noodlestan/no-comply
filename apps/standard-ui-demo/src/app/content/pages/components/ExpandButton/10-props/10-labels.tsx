import { ExpandButton, Label } from '@no-comply/standard-ui';

import { createDocsItemData, createDocsSectionData } from '../../../../types';
import { itemProps as props } from '../constants';
import { createExpandButtonExampleController } from '../controllers';

export default createDocsSectionData({
	title: 'labels',
	items: [
		createDocsItemData({ props }, () => {
			const { expanded, expandedText, id, toggleExpanded } = createExpandButtonExampleController();

			const labels = {
				expanded: 'Close section',
				collapsed: 'Show section',
			};

			return (
				<>
					<ExpandButton
						expanded={expanded()}
						labels={labels}
						controls={id}
						onPress={toggleExpanded}
					/>
					<Label id={id}>{expandedText()}</Label>
				</>
			);
		}),
	],
});
