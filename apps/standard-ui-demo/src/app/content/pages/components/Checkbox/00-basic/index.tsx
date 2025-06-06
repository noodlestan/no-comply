import { Checkbox, Divider, Label } from '@no-comply/standard-ui';
import { createSignal } from 'solid-js';

import { createDocsItemData, createDocsSectionData } from '../../../../types';
import { itemProps as props } from '../constants';

export default createDocsSectionData({
    title: 'Basic usage',
    items: [
        createDocsItemData({ props }, () => {
            const [value, setValue] = createSignal(false);

            return (
                <>
                    <Checkbox checked={value()} onValueChange={setValue} />
                    <Divider />
                    <Label>Current value: {value()}</Label>
                </>
            );
        }),
    ],
});
