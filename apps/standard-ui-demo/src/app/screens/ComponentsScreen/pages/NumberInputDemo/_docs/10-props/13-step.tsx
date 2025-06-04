import { NumberInput } from '@no-comply/standard-ui';

import { createDemoItem, createDemoSectionData } from '../../../../../../content';
import { itemProps as props } from '../constants';
import { createNumberInputDemoController } from '../controllers';

export default createDemoSectionData({
    title: 'step',
    items: [
        createDemoItem({ title: '0.1', props }, () => {
            const { value, handleValueChange } = createNumberInputDemoController({
                value: '9.99',
            });
            return <NumberInput value={value()} onValueChange={handleValueChange} step={0.1} />;
        }),
        createDemoItem({ title: '1', props: { ...props, defaultValue: true } }, () => {
            const { value, handleValueChange } = createNumberInputDemoController({
                value: '55',
            });
            return <NumberInput value={value()} onValueChange={handleValueChange} step={1} />;
        }),
        createDemoItem({ title: '10', props }, () => {
            const { value, handleValueChange } = createNumberInputDemoController({
                value: '1100',
            });
            return <NumberInput value={value()} onValueChange={handleValueChange} step={10} />;
        }),
    ],
});
