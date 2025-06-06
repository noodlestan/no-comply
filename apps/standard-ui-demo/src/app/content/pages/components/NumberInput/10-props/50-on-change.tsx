import { NumberInput } from '@no-comply/standard-ui';

import { createDocsItemData, createDocsSectionData } from '../../../../types';
import { itemProps as props } from '../constants';
import { createNumberInputExampleController } from '../controllers';

const onChange = createDocsItemData({ props }, () => {
	const { value, handleChange } = createNumberInputExampleController({ value: '33' });
	return <NumberInput value={value()} onChange={handleChange} />;
});

export default createDocsSectionData({
	title: 'onChange',
	items: [onChange],
});
