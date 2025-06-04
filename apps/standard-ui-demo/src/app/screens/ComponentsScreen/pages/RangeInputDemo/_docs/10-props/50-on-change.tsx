import { RangeInput } from '@no-comply/standard-ui';

import { createDemoItem, createDemoSectionData } from '../../../../../../content';
import { itemProps as props } from '../constants';
import { createRangeInputDemoController } from '../controllers';

const onChange = createDemoItem({ props }, () => {
    const { value, handleChange } = createRangeInputDemoController({ value: '33' });
    return <RangeInput value={value()} onChange={handleChange} />;
});

export default createDemoSectionData({
    title: 'onChange',
    items: [onChange],
});
