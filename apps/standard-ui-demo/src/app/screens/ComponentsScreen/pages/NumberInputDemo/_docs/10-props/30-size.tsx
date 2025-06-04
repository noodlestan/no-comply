import { NumberInput } from '@no-comply/standard-ui';

import { createDemoItem, createDemoSectionData } from '../../../../../../content';
import { itemProps as props } from '../constants';
import { createNumberInputDemoController } from '../controllers';

export default createDemoSectionData({
    title: 'size',
    items: [
        createDemoItem({ title: 'l', props }, () => {
            const { value, handleValueChange } = createNumberInputDemoController({
                value: '99',
            });
            return <NumberInput value={value()} onValueChange={handleValueChange} size="l" />;
        }),
        createDemoItem({ title: 'm', props }, () => {
            const { value, handleValueChange } = createNumberInputDemoController({
                value: '3.35',
            });
            return <NumberInput value={value()} onValueChange={handleValueChange} size="m" />;
        }),
        createDemoItem({ title: 's', props }, () => {
            const { value, handleValueChange } = createNumberInputDemoController({
                value: '1973',
            });
            return <NumberInput value={value()} onValueChange={handleValueChange} size="s" />;
        }),
        createDemoItem({ title: 'xs', props }, () => {
            const { value, handleValueChange } = createNumberInputDemoController({
                value: '0.12',
            });
            return <NumberInput value={value()} onValueChange={handleValueChange} size="xs" />;
        }),
    ],
});
