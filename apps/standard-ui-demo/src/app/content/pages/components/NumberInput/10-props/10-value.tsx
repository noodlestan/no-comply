import { NumberInput } from '@no-comply/standard-ui';

import { createDocsItemData, createDocsSectionData } from '../../../../types';
import { itemProps as props } from '../constants';
import { createNumberInputExampleController } from '../controllers';

const value = createDocsItemData({ props }, () => {
    const { value, handleValueChange } = createNumberInputExampleController({ value: '3.43' });
    return (
        <>
            <NumberInput value={value()} onValueChange={handleValueChange} />
        </>
    );
});

export default createDocsSectionData({
    title: 'value',
    items: [value],
});
