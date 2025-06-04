import { Checkbox, Divider, Label } from '@no-comply/standard-ui';
import { createSignal } from 'solid-js';

import { createDemoItem, createDemoSectionData } from '../../../../../../content';
import { itemProps as props } from '../constants';

export default createDemoSectionData({
    title: 'Basic usage',
    items: [
        createDemoItem({ props }, () => {
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
