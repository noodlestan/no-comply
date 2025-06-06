import { Select } from '@no-comply/standard-ui';

import { createDocsItemData, createDocsSectionData } from '../../../../types';
import { itemProps as props } from '../constants';
import { createSelectExampleController } from '../controllers';

const onChange = createDocsItemData({ props }, () => {
    const { value, handleChange } = createSelectExampleController({ value: 'apple' });
    return (
        <Select value={value()} onChange={handleChange} placeholder="-" modified>
            <option value="apple">Apples</option>
            <option value="orange">Oranges</option>
            <option value="banana">Bananas</option>
        </Select>
    );
});

export default createDocsSectionData({
    title: 'onChange',
    items: [onChange],
});
