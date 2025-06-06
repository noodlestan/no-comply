import { Checkbox } from '@no-comply/standard-ui';

import { createDocsItemData, createDocsSectionData } from '../../../../types';
import { itemProps as props } from '../constants';
import { createCheckboxExampleController } from '../controllers';

const onChange = createDocsItemData({ props }, () => {
    const { value, handleChange } = createCheckboxExampleController({
        value: true,
    });
    return <Checkbox checked={value()} onChange={handleChange} modified />;
});

export default createDocsSectionData({
    title: 'onChange',
    items: [onChange],
});
