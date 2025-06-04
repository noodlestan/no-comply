import { Select } from '@no-comply/standard-ui';

import { createDemoItem, createDemoSectionData } from '../../../../../../content';
import { itemProps as props } from '../constants';
import { createSelectDemoController } from '../controllers';

export default createDemoSectionData({
    title: 'size',
    items: [
        createDemoItem({ title: 'l', props }, () => {
            const { value, handleValueChange } = createSelectDemoController();
            return (
                <Select size="l" value={value()} onValueChange={handleValueChange} placeholder="-">
                    <option value="apple">Apples</option>
                    <option value="orange">Oranges</option>
                    <option value="banana">Bananas</option>
                </Select>
            );
        }),
        createDemoItem({ title: 'l', props }, () => {
            const { value, handleValueChange } = createSelectDemoController();
            return (
                <Select size="m" value={value()} onValueChange={handleValueChange} placeholder="-">
                    <option value="apple">Apples</option>
                    <option value="orange">Oranges</option>
                    <option value="banana">Bananas</option>
                </Select>
            );
        }),
        createDemoItem({ title: 'l', props }, () => {
            const { value, handleValueChange } = createSelectDemoController();
            return (
                <Select size="m" value={value()} onValueChange={handleValueChange} placeholder="-">
                    <option value="apple">Apples</option>
                    <option value="orange">Oranges</option>
                    <option value="banana">Bananas</option>
                </Select>
            );
        }),
        createDemoItem({ title: 'l', props }, () => {
            const { value, handleValueChange } = createSelectDemoController();
            return (
                <Select size="m" value={value()} onValueChange={handleValueChange} placeholder="-">
                    <option value="apple">Apples</option>
                    <option value="orange">Oranges</option>
                    <option value="banana">Bananas</option>
                </Select>
            );
        }),
    ],
});
