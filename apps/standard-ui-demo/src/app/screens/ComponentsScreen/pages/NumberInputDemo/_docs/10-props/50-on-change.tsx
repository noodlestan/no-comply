import { NumberInput } from '@no-comply/standard-ui';

import { createDemoItem, createDemoSectionData } from '../../../../../../content';
import { itemProps as props } from '../constants';
import { createNumberInputDemoController } from '../controllers';

const onChange = createDemoItem({ props }, () => {
    const { value, handleChange } = createNumberInputDemoController({ value: '33' });
    return <NumberInput value={value()} onChange={handleChange} />;
});

export default createDemoSectionData({
    title: 'onChange',
    items: [onChange],
});
