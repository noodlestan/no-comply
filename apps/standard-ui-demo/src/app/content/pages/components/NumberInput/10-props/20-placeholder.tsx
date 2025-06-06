import { NumberInput } from '@no-comply/standard-ui';

import { createDocsItemData, createDocsSectionData } from '../../../../types';
import { itemProps as props } from '../constants';
import { createNumberInputExampleController } from '../controllers';

export default createDocsSectionData({
	title: 'placeholder',
	items: [
		createDocsItemData({ props }, () => {
			const { value, handleValueChange } = createNumberInputExampleController();
			return <NumberInput value={value()} onValueChange={handleValueChange} placeholder="0.0" />;
		}),
	],
});
