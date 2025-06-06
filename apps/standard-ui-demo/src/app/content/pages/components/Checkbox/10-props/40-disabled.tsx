import { Checkbox } from '@no-comply/standard-ui';

import { createDocsItemData, createDocsSectionData } from '../../../../types';
import { itemProps as props } from '../constants';
import { createCheckboxExampleController } from '../controllers';

export default createDocsSectionData({
	title: 'disabled',
	items: [
		createDocsItemData({ props }, () => {
			const { value, handleValueChange } = createCheckboxExampleController({
				value: true,
			});
			return <Checkbox checked={value()} onValueChange={handleValueChange} disabled />;
		}),
	],
});
