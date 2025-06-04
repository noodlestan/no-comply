import { NumberInput } from '@no-comply/standard-ui';

import { createDemoItem, createDemoSectionData } from '../../../../../../content';
import { itemProps as props } from '../constants';
import { createNumberInputDemoController } from '../controllers';

export default createDemoSectionData({
    title: 'modified',
    items: [
        createDemoItem({ props }, () => {
            const { value, handleValueChange } = createNumberInputDemoController({
                value: '33',
            });
            return <NumberInput value={value()} onValueChange={handleValueChange} modified />;
        }),
    ],
});
