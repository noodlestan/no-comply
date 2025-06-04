import { Checkbox } from '@no-comply/standard-ui';

import { createDemoItem, createDemoSectionData } from '../../../../../../content';
import { itemProps as props } from '../constants';
import { createCheckboxDemoController } from '../controllers';

export default createDemoSectionData({
    title: 'size',
    items: [
        createDemoItem({ title: 'l', props }, () => {
            const { value, handleValueChange } = createCheckboxDemoController();
            return <Checkbox checked={value()} onValueChange={handleValueChange} size="l" />;
        }),
        createDemoItem({ title: 'l', props }, () => {
            const { value, handleValueChange } = createCheckboxDemoController();
            return <Checkbox checked={value()} onValueChange={handleValueChange} size="m" />;
        }),
        createDemoItem({ title: 'l', props }, () => {
            const { value, handleValueChange } = createCheckboxDemoController();
            return <Checkbox checked={value()} onValueChange={handleValueChange} size="m" />;
        }),
        createDemoItem({ title: 'l', props }, () => {
            const { value, handleValueChange } = createCheckboxDemoController();
            return <Checkbox checked={value()} onValueChange={handleValueChange} size="m" />;
        }),
    ],
});
