import { Select } from '@no-comply/standard-ui';

import { createDocsItemData, createDocsSectionData } from '../../../../types';
import { itemProps as props } from '../constants';
import { createSelectExampleController } from '../controllers';

export default createDocsSectionData({
    title: 'size',
    items: [
        createDocsItemData({ title: 'l', props }, () => {
            const { value, handleValueChange } = createSelectExampleController();
            return (
                <Select size="l" value={value()} onValueChange={handleValueChange} placeholder="-">
                    <option value="apple">Apples</option>
                    <option value="orange">Oranges</option>
                    <option value="banana">Bananas</option>
                </Select>
            );
        }),
        createDocsItemData({ title: 'l', props }, () => {
            const { value, handleValueChange } = createSelectExampleController();
            return (
                <Select size="m" value={value()} onValueChange={handleValueChange} placeholder="-">
                    <option value="apple">Apples</option>
                    <option value="orange">Oranges</option>
                    <option value="banana">Bananas</option>
                </Select>
            );
        }),
        createDocsItemData({ title: 'l', props }, () => {
            const { value, handleValueChange } = createSelectExampleController();
            return (
                <Select size="m" value={value()} onValueChange={handleValueChange} placeholder="-">
                    <option value="apple">Apples</option>
                    <option value="orange">Oranges</option>
                    <option value="banana">Bananas</option>
                </Select>
            );
        }),
        createDocsItemData({ title: 'l', props }, () => {
            const { value, handleValueChange } = createSelectExampleController();
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
