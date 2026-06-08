import { Label } from '@no-comply/standard-ui';

import { LoremIpsum } from '../../../../components';
import { createDocsItemData, createDocsSectionData } from '../../../../types';
import { itemProps as props } from '../constants';

export default createDocsSectionData({
	title: 'Basic usage',
	items: [
		createDocsItemData({ props }, () => (
			<Label>
				<LoremIpsum words={3} />
			</Label>
		)),
	],
});
