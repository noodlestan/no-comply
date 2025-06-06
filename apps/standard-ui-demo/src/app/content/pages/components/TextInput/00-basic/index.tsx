import { Divider, Label, TextInput } from '@no-comply/standard-ui';
import { createSignal } from 'solid-js';

import { lipsumWords } from '../../../../components';
import { createDocsItemData, createDocsSectionData } from '../../../../types';
import { itemProps as props } from '../constants';

export default createDocsSectionData({
    title: 'Basic usage',
    items: [
        createDocsItemData({ props }, () => {
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
