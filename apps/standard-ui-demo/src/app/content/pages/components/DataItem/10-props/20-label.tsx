import { DataItem } from '@no-comply/standard-ui';

import { LoremIpsum, lipsumWords } from '../../../../components';
import { createDocsItemData, createDocsSectionData } from '../../../../types';
import { itemProps as props } from '../constants';

export default createDocsSectionData({
	title: 'label',
	items: [
		createDocsItemData({ props }, () => (
			<DataItem label={lipsumWords(2)}>
				<LoremIpsum words={3} />
			</DataItem>
		)),
		createDocsItemData({ props }, () => <DataItem label={lipsumWords(2)} value={lipsumWords(3)} />),
	],
});
