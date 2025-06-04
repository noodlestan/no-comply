import { RangeInput } from '@no-comply/standard-ui';

import { createDemoItem, createDemoSectionData } from '../../../../../../content';
import { itemProps as props } from '../constants';
import { createRangeInputDemoController } from '../controllers';

const value = createDemoItem({ props }, () => {
    const { value, handleValueChange } = createRangeInputDemoController({ value: '3.43' });
    return (
        <>
            <RangeInput value={value()} onValueChange={handleValueChange} />
        </>
    );
});

export default createDemoSectionData({
    title: 'value',
    items: [value],
});
