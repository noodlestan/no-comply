import { RangeInput } from '@no-comply/standard-ui';

import { createDemoItem, createDemoSectionData } from '../../../../../../content';
import { itemProps as props } from '../constants';
import { createRangeInputDemoController } from '../controllers';

export default createDemoSectionData({
    title: 'length',
    items: [
        createDemoItem({ title: 'full', props }, () => {
            const { value, handleValueChange } = createRangeInputDemoController({
                value: '99',
            });
            return <RangeInput value={value()} onValueChange={handleValueChange} length="full" />;
        }),
        createDemoItem({ title: 'l', props }, () => {
            const { value, handleValueChange } = createRangeInputDemoController({
                value: '3.35',
            });
            return <RangeInput value={value()} onValueChange={handleValueChange} length="l" />;
        }),
        createDemoItem({ title: 'm', props }, () => {
            const { value, handleValueChange } = createRangeInputDemoController({
                value: '25',
            });
            return <RangeInput value={value()} onValueChange={handleValueChange} length="m" />;
        }),
        createDemoItem({ title: 's', props }, () => {
            const { value, handleValueChange } = createRangeInputDemoController({
                value: '0.12',
            });
            return <RangeInput value={value()} onValueChange={handleValueChange} length="s" />;
        }),
        createDemoItem({ title: 'number (3)', props }, () => {
            const { value, handleValueChange } = createRangeInputDemoController({
                value: '50',
            });
            return <RangeInput value={value()} onValueChange={handleValueChange} length={3} />;
        }),
        createDemoItem({ title: 'auto', props }, () => {
            const { value, handleValueChange } = createRangeInputDemoController({
                value: '35.15',
            });
            return <RangeInput value={value()} onValueChange={handleValueChange} length="auto" />;
        }),
    ],
});
