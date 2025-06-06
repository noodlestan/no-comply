import { RangeInput } from '@no-comply/standard-ui';

import { createDocsItemData, createDocsSectionData } from '../../../../types';
import { itemProps as props } from '../constants';
import { createRangeInputExampleController } from '../controllers';

const onChange = createDocsItemData({ props }, () => {
	const { value, handleChange } = createRangeInputExampleController({ value: '33' });
	return <RangeInput value={value()} onChange={handleChange} />;
});

export default createDocsSectionData({
	title: 'onChange',
	items: [onChange],
});
