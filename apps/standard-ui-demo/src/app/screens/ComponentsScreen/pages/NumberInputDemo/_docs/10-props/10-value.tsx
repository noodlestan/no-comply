import { NumberInput } from '@no-comply/standard-ui';

import { createDemoItem, createDemoSectionData } from '../../../../../../content';
import { itemProps as props } from '../constants';
import { createNumberInputDemoController } from '../controllers';

const value = createDemoItem({ props }, () => {
    const { value, handleValueChange } = createNumberInputDemoController({ value: '3.43' });
    return (
        <>
            <NumberInput value={value()} onValueChange={handleValueChange} />
        </>
    );
});

export default createDemoSectionData({
    title: 'value',
    items: [value],
});
