import { Checkbox } from '@no-comply/standard-ui';

import { createDemoItem, createDemoSectionData } from '../../../../../../content';
import { itemProps as props } from '../constants';
import { createCheckboxDemoController } from '../controllers';

const onChange = createDemoItem({ props }, () => {
    const { value, handleChange } = createCheckboxDemoController({
        value: true,
    });
    return <Checkbox checked={value()} onChange={handleChange} modified />;
});

export default createDemoSectionData({
    title: 'onChange',
    items: [onChange],
});
