import { Select } from '@no-comply/standard-ui';

import { createDemoItem, createDemoSectionData } from '../../../../../../content';
import { itemProps as props } from '../constants';
import { createSelectDemoController } from '../controllers';

const value = createDemoItem({ props }, () => {
    const { value, handleValueChange } = createSelectDemoController({ value: 'apple' });
    return (
        <Select value={value()} onValueChange={handleValueChange}>
            <option value="apple">Apples</option>
            <option value="orange">Oranges</option>
            <option value="banana">Bananas</option>
        </Select>
    );
});

export default createDemoSectionData({
    title: 'value',
    items: [value],
});
