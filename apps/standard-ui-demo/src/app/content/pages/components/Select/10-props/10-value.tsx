import { Select } from '@no-comply/standard-ui';

import { createDocsItemData, createDocsSectionData } from '../../../../types';
import { itemProps as props } from '../constants';
import { createSelectExampleController } from '../controllers';

const value = createDocsItemData({ props }, () => {
    const { value, handleValueChange } = createSelectExampleController({ value: 'apple' });
    return (
        <Select value={value()} onValueChange={handleValueChange}>
            <option value="apple">Apples</option>
            <option value="orange">Oranges</option>
            <option value="banana">Bananas</option>
        </Select>
    );
});

export default createDocsSectionData({
    title: 'value',
    items: [value],
});
