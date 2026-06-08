import { NumberInput } from '@no-comply/standard-ui';

import { createDocsItemData, createDocsSectionData } from '../../../../types';
import { itemProps as props } from '../constants';
import { createNumberInputExampleController } from '../controllers';

export default createDocsSectionData({
	title: 'modified',
	items: [
		createDocsItemData({ props }, () => {
			const { value, handleValueChange } = createNumberInputExampleController({
				value: '33',
			});
			return <NumberInput value={value()} onValueChange={handleValueChange} modified />;
		}),
	],
});
