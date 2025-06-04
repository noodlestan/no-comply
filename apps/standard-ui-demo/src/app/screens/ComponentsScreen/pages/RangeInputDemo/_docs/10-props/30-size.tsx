import { RangeInput } from '@no-comply/standard-ui';

import { createDemoItem, createDemoSectionData } from '../../../../../../content';
import { itemProps as props } from '../constants';
import { createRangeInputDemoController } from '../controllers';

export default createDemoSectionData({
    title: 'size',
    items: [
        createDemoItem({ title: 'l', props }, () => {
            const { value, handleValueChange } = createRangeInputDemoController({
                value: '99',
            });
            return <RangeInput value={value()} onValueChange={handleValueChange} size="l" />;
        }),
        createDemoItem({ title: 'm', props }, () => {
            const { value, handleValueChange } = createRangeInputDemoController({
                value: '3.35',
            });
            return <RangeInput value={value()} onValueChange={handleValueChange} size="m" />;
        }),
        createDemoItem({ title: 's', props }, () => {
            const { value, handleValueChange } = createRangeInputDemoController({
                value: '25',
            });
            return <RangeInput value={value()} onValueChange={handleValueChange} size="s" />;
        }),
        createDemoItem({ title: 'xs', props }, () => {
            const { value, handleValueChange } = createRangeInputDemoController({
                value: '0.12',
            });
            return <RangeInput value={value()} onValueChange={handleValueChange} size="xs" />;
        }),
    ],
});
