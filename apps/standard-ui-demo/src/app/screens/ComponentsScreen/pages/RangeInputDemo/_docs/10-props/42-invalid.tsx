import { RangeInput } from '@no-comply/standard-ui';

import { createDemoItem, createDemoSectionData } from '../../../../../../content';
import { itemProps as props } from '../constants';
import { createRangeInputDemoController } from '../controllers';

export default createDemoSectionData({
    title: 'invalid',
    items: [
        createDemoItem({ props }, () => {
            const { value, handleValueChange } = createRangeInputDemoController({
                value: '33',
            });
            return <RangeInput value={value()} onValueChange={handleValueChange} invalid />;
        }),
    ],
});
