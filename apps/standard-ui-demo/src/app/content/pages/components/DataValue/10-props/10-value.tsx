import { DataValue } from '@no-comply/standard-ui';

import { lipsumWords } from '../../../../components';
import { createDocsItemData, createDocsSectionData } from '../../../../types';
import { itemProps as props } from '../constants';

export default createDocsSectionData({
	title: 'value',
	items: [createDocsItemData({ props }, () => <DataValue value={lipsumWords(3)} />)],
});
