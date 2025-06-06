import { TextInput } from '@no-comply/standard-ui';

import { lipsumWords } from '../../../../components';
import { createDocsItemData, createDocsSectionData } from '../../../../types';
import { itemProps as props } from '../constants';
import { createTextInputExampleController } from '../controllers';

export default createDocsSectionData({
	title: 'onValueChange',
	items: [
		createDocsItemData({ props }, () => {
			const { value, handleValueChange } = createTextInputExampleController({
				value: lipsumWords(3),
			});
			return <TextInput value={value()} onValueChange={handleValueChange} />;
		}),
	],
});
