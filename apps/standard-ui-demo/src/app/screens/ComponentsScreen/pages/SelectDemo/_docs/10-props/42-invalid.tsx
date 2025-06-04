import { Select } from '@no-comply/standard-ui';

import { createDemoItem, createDemoSectionData } from '../../../../../../content';
import { itemProps as props } from '../constants';
import { createSelectDemoController } from '../controllers';

export default createDemoSectionData({
    title: 'invalid',
    items: [
        createDemoItem({ props }, () => {
            const { value, handleValueChange } = createSelectDemoController();
            return (
                <Select
                    length="full"
                    value={value()}
                    onValueChange={handleValueChange}
                    placeholder="-"
                    invalid
                >
                    <option value="apple">Apples</option>
                    <option value="orange">Oranges</option>
                    <option value="banana">Bananas</option>
                </Select>
            );
        }),
    ],
});
