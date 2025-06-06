import { Divider, Label, Select } from '@no-comply/standard-ui';
import { createSignal } from 'solid-js';

import { createDocsItemData, createDocsSectionData } from '../../../../types';
import { itemProps as props } from '../constants';

export default createDocsSectionData({
    title: 'Basic usage',
    items: [
        createDocsItemData({ props }, () => {
            const [value, setValue] = createSignal('orange');

            return (
                <>
                    <Select value={value()} onValueChange={setValue}>
                        <option value="apple">Apples</option>
                        <option value="orange">Oranges</option>
                        <option value="banana">Bananas</option>
                    </Select>
                    <Divider />
                    <Label>Current value: {value()}</Label>
                </>
            );
        }),
    ],
});
