import { Divider, Label, Select } from '@no-comply/standard-ui';
import { createSignal } from 'solid-js';

import { createDemoItem, createDemoSectionData } from '../../../../../../content';
import { itemProps as props } from '../constants';

export default createDemoSectionData({
    title: 'Basic usage',
    items: [
        createDemoItem({ props }, () => {
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
