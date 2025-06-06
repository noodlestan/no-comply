import { NumberInput } from '@no-comply/standard-ui';

import { createDocsItemData, createDocsSectionData } from '../../../../types';
import { itemProps as props } from '../constants';
import { createNumberInputExampleController } from '../controllers';

const onValueChange = createDocsItemData({ props }, () => {
	const { value, handleValueChange } = createNumberInputExampleController({ value: '33' });
	return <NumberInput value={value()} onValueChange={handleValueChange} />;
});

export default createDocsSectionData({
	title: 'onValueChange',
	items: [onValueChange],
});
