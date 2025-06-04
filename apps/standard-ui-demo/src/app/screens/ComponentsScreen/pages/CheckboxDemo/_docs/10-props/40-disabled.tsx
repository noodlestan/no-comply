import { Checkbox } from '@no-comply/standard-ui';

import { createDemoItem, createDemoSectionData } from '../../../../../../content';
import { itemProps as props } from '../constants';
import { createCheckboxDemoController } from '../controllers';

export default createDemoSectionData({
    title: 'disabled',
    items: [
        createDemoItem({ props }, () => {
            const { value, handleValueChange } = createCheckboxDemoController({
                value: true,
            });
            return <Checkbox checked={value()} onValueChange={handleValueChange} disabled />;
        }),
    ],
});
