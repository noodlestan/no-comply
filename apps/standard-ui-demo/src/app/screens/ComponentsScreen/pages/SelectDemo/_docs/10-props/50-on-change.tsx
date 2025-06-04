import { Select } from '@no-comply/standard-ui';

import { createDemoItem, createDemoSectionData } from '../../../../../../content';
import { itemProps as props } from '../constants';
import { createSelectDemoController } from '../controllers';

const onChange = createDemoItem({ props }, () => {
    const { value, handleChange } = createSelectDemoController({ value: 'apple' });
    return (
        <Select value={value()} onChange={handleChange} placeholder="-" modified>
            <option value="apple">Apples</option>
            <option value="orange">Oranges</option>
            <option value="banana">Bananas</option>
        </Select>
    );
});

export default createDemoSectionData({
    title: 'onChange',
    items: [onChange],
});
