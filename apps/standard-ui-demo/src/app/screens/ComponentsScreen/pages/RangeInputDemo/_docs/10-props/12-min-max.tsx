import { Label, RangeInput } from '@no-comply/standard-ui';

import { createDemoItem, createDemoSectionData } from '../../../../../../content';
import { itemProps as props } from '../constants';
import { createRangeInputDemoController } from '../controllers';

export default createDemoSectionData({
    title: 'min and max',
    items: [
        createDemoItem({ title: 'max (10)', props }, () => {
            const { value, handleValueChange } = createRangeInputDemoController({
                value: '9.99',
            });
            return (
                <>
                    <RangeInput value={value()} onValueChange={handleValueChange} max={10} />
                    <Label>Current value: {value()}</Label>
                </>
            );
        }),
        createDemoItem({ title: 'min (3)', props }, () => {
            const { value, handleValueChange } = createRangeInputDemoController({
                value: '9',
            });
            return (
                <>
                    <RangeInput value={value()} onValueChange={handleValueChange} min={3} />
                    <Label>Current value: {value()}</Label>
                </>
            );
        }),
        createDemoItem({ title: 'min (0) and max(5)', props }, () => {
            const { value, handleValueChange } = createRangeInputDemoController({
                value: '1',
            });
            return (
                <>
                    <RangeInput value={value()} onValueChange={handleValueChange} min={0} max={5} />
                    <Label>Current value: {value()}</Label>
                </>
            );
        }),
    ],
});
