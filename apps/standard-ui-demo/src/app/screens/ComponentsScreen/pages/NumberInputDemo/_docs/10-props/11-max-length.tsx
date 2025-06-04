import { NumberInput } from '@no-comply/standard-ui';

import { createDemoItem, createDemoSectionData } from '../../../../../../content';
import { itemProps as props } from '../constants';
import { createNumberInputDemoController } from '../controllers';

export default createDemoSectionData({
    title: 'maxLength',
    items: [
        createDemoItem({ title: 'number (3)', props }, () => {
            const { value, handleValueChange } = createNumberInputDemoController({
                value: '123',
            });
            return <NumberInput value={value()} onValueChange={handleValueChange} maxLength={3} />;
        }),
    ],
});
