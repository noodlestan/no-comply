import { Select } from '@no-comply/standard-ui';

import { createDemoItem, createDemoSectionData } from '../../../../../../content';
import { itemProps as props } from '../constants';
import { createSelectDemoController } from '../controllers';

export default createDemoSectionData({
    title: 'length',
    items: [
        createDemoItem({ title: 'full', props }, () => {
            const { value, handleValueChange } = createSelectDemoController();
            return (
                <Select
                    length="full"
                    value={value()}
                    onValueChange={handleValueChange}
                    placeholder="-"
                >
                    <option value="apple">Apples</option>
                    <option value="orange">Oranges</option>
                    <option value="banana">Bananas</option>
                </Select>
            );
        }),
        createDemoItem({ title: 'l', props }, () => {
            const { value, handleValueChange } = createSelectDemoController();
            return (
                <Select
                    length="l"
                    value={value()}
                    onValueChange={handleValueChange}
                    placeholder="-"
                >
                    <option value="apple">Apples</option>
                    <option value="orange">Oranges</option>
                    <option value="banana">Bananas</option>
                </Select>
            );
        }),
        createDemoItem({ title: 'm', props }, () => {
            const { value, handleValueChange } = createSelectDemoController();
            return (
                <Select
                    length="m"
                    value={value()}
                    onValueChange={handleValueChange}
                    placeholder="-"
                >
                    <option value="apple">Apples</option>
                    <option value="orange">Oranges</option>
                    <option value="banana">Bananas</option>
                </Select>
            );
        }),
        createDemoItem({ title: 's', props }, () => {
            const { value, handleValueChange } = createSelectDemoController();
            return (
                <Select
                    length="s"
                    value={value()}
                    onValueChange={handleValueChange}
                    placeholder="-"
                >
                    <option value="apple">Apples</option>
                    <option value="orange">Oranges</option>
                    <option value="banana">Bananas</option>
                </Select>
            );
        }),
        createDemoItem({ title: 'number (3)', props }, () => {
            const { value, handleValueChange } = createSelectDemoController();
            return (
                <Select
                    length={3}
                    value={value()}
                    onValueChange={handleValueChange}
                    placeholder="-"
                >
                    <option value="apple">Apples</option>
                    <option value="orange">Oranges</option>
                    <option value="banana">Bananas</option>
                </Select>
            );
        }),
        createDemoItem({ title: 'auto', props }, () => {
            const { value, handleValueChange } = createSelectDemoController();
            return (
                <Select
                    length="auto"
                    value={value()}
                    onValueChange={handleValueChange}
                    placeholder="-"
                >
                    <option value="apple">Apples</option>
                    <option value="orange">Oranges</option>
                    <option value="banana">Bananas</option>
                </Select>
            );
        }),
    ],
});
