import { TextInput } from '@no-comply/standard-ui';

import { createDocsItemData, createDocsSectionData } from '../../../../types';
import { itemProps as props } from '../constants';
import { createTextInputExampleController } from '../controllers';

export default createDocsSectionData({
	title: 'placeholder',
	items: [
		createDocsItemData({ props }, () => {
			const { value, handleValueChange } = createTextInputExampleController();
			return (
				<TextInput
					value={value()}
					onValueChange={handleValueChange}
					placeholder="suggestions: Cats, Dogs, ..."
				/>
			);
		}),
	],
});
