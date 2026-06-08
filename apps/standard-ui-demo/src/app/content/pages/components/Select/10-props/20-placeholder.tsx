import { Select } from '@no-comply/standard-ui';

import { createDocsItemData, createDocsSectionData } from '../../../../types';
import { itemProps as props } from '../constants';
import { createSelectExampleController } from '../controllers';

export default createDocsSectionData({
	title: 'placeholder',
	items: [
		createDocsItemData({ props }, () => {
			const { value, handleValueChange } = createSelectExampleController({ value: '' });
			return (
				<Select value={value()} onValueChange={handleValueChange} placeholder="Choose carefully">
					<option value="apple">Apples</option>
					<option value="orange">Oranges</option>
					<option value="banana">Bananas</option>
				</Select>
			);
		}),
	],
});
