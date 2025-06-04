import { Select } from '@no-comply/standard-ui';

import { createDemoItem, createDemoSectionData } from '../../../../../../content';
import { itemProps as props } from '../constants';
import { createSelectDemoController } from '../controllers';

export default createDemoSectionData({
    title: 'disabled',
    items: [
        createDemoItem({ props }, () => {
            const { value, handleValueChange } = createSelectDemoController({
                value: 'banana',
            });
            return (
                <Select
                    length="full"
                    value={value()}
                    onValueChange={handleValueChange}
                    placeholder="-"
                    disabled
                >
                    <option value="apple">Apples</option>
                    <option value="orange">Oranges</option>
                    <option value="banana">Bananas</option>
                </Select>
            );
        }),
    ],
});
