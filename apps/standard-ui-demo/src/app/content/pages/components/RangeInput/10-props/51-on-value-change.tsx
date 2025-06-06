import { RangeInput } from '@no-comply/standard-ui';

import { createDocsItemData, createDocsSectionData } from '../../../../types';
import { itemProps as props } from '../constants';
import { createRangeInputExampleController } from '../controllers';

const onValueChange = createDocsItemData({ props }, () => {
    const { value, handleValueChange } = createRangeInputExampleController({ value: '33' });
    return <RangeInput value={value()} onValueChange={handleValueChange} />;
});

export default createDocsSectionData({
    title: 'onValueChange',
    items: [onValueChange],
});
