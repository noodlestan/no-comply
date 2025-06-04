import { Divider, Label, TextInput } from '@no-comply/standard-ui';
import { createSignal } from 'solid-js';

import { createDemoItem, createDemoSectionData, lipsumWords } from '../../../../../../content';
import { itemProps as props } from '../constants';

export default createDemoSectionData({
    title: 'Basic usage',
    items: [
        createDemoItem({ props }, () => {
            const [value, setValue] = createSignal(lipsumWords(3));

            return (
                <>
                    <TextInput value={value()} onValueChange={setValue} />
                    <Divider />
                    <Label>Current value: {value()}</Label>
                </>
            );
        }),
    ],
});
