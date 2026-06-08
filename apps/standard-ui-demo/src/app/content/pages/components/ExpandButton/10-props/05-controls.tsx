import { ExpandButton, Label } from '@no-comply/standard-ui';

import { createDocsItemData, createDocsSectionData } from '../../../../types';
import { itemProps as props } from '../constants';
import { createExpandButtonExampleController } from '../controllers';

export default createDocsSectionData({
	title: 'controls',
	items: [
		createDocsItemData({ props }, () => {
			const { expanded, expandedText, labels, id, toggleExpanded } =
				createExpandButtonExampleController();
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
