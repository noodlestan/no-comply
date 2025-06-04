import { NumberInput } from '@no-comply/standard-ui';

import { createDemoItem, createDemoSectionData } from '../../../../../../content';
import { itemProps as props } from '../constants';
import { createNumberInputDemoController } from '../controllers';

const onValueChange = createDemoItem({ props }, () => {
    const { value, handleValueChange } = createNumberInputDemoController({ value: '33' });
    return <NumberInput value={value()} onValueChange={handleValueChange} />;
});

export default createDemoSectionData({
    title: 'onValueChange',
    items: [onValueChange],
});
