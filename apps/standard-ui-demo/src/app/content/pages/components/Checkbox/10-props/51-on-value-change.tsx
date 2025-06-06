import { Checkbox } from '@no-comply/standard-ui';

import { createDocsItemData, createDocsSectionData } from '../../../../types';
import { itemProps as props } from '../constants';
import { createCheckboxExampleController } from '../controllers';

export default createDocsSectionData({
	title: 'onChange',
	items: [
		createDocsItemData({ props }, () => {
			const { value, handleChange } = createCheckboxExampleController({
				value: true,
			});
			return <Checkbox checked={value()} onChange={handleChange} modified />;
		}),
	],
});
