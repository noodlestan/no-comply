import { NumberInput } from '@no-comply/standard-ui';

import { createDemoItem, createDemoSectionData } from '../../../../../../content';
import { itemProps as props } from '../constants';
import { createNumberInputDemoController } from '../controllers';

const placeholder = createDemoItem({ props }, () => {
    const { value, handleValueChange } = createNumberInputDemoController();
    return <NumberInput value={value()} onValueChange={handleValueChange} placeholder="0.0" />;
});

export default createDemoSectionData({
    title: 'placeholder',
    items: [placeholder],
});
