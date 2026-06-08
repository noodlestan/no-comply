import { RangeInput } from '@no-comply/standard-ui';

import { createDocsItemData, createDocsSectionData } from '../../../../types';
import { itemProps as props } from '../constants';
import { createRangeInputExampleController } from '../controllers';

export default createDocsSectionData({
	title: 'onValueChange',
	items: [
		createDocsItemData({ props }, () => {
			const { value, handleValueChange } = createRangeInputExampleController({ value: '33' });
			return <RangeInput value={value()} onValueChange={handleValueChange} />;
		}),
	],
});
