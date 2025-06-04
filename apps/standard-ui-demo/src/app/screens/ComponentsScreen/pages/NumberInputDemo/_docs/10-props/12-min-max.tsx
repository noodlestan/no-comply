import { NumberInput } from '@no-comply/standard-ui';

import { createDemoItem, createDemoSectionData } from '../../../../../../content';
import { itemProps as props } from '../constants';
import { createNumberInputDemoController } from '../controllers';

export default createDemoSectionData({
    title: 'min and max',
    items: [
        createDemoItem({ title: 'max (10)', props }, () => {
            const { value, handleValueChange } = createNumberInputDemoController({
                value: '9.99',
            });
            return <NumberInput value={value()} onValueChange={handleValueChange} max={10} />;
        }),
        createDemoItem({ title: 'min (3)', props }, () => {
            const { value, handleValueChange } = createNumberInputDemoController({
                value: '9',
            });
            return <NumberInput value={value()} onValueChange={handleValueChange} min={3} />;
        }),
        createDemoItem({ title: 'min (0) and max(5)', props }, () => {
            const { value, handleValueChange } = createNumberInputDemoController({
                value: '1',
            });
            return (
                <NumberInput value={value()} onValueChange={handleValueChange} min={0} max={5} />
            );
        }),
    ],
});
