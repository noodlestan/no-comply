import { Divider, Label, RangeInput } from '@no-comply/standard-ui';
import { createSignal } from 'solid-js';

import { createDemoItem, createDemoSectionData } from '../../../../../../content';
import { itemProps as props } from '../constants';

export default createDemoSectionData({
    title: 'Basic usage',
    items: [
        createDemoItem({ props }, () => {
            const [value, setValue] = createSignal('33');

            return (
                <>
                    <RangeInput value={value()} onValueChange={setValue} />
                    <Divider />
                    <Label>Current value: {value()}</Label>
                </>
            );
        }),
    ],
});
