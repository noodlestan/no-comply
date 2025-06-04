import { Label, RangeInput } from '@no-comply/standard-ui';

import { createDemoItem, createDemoSectionData } from '../../../../../../content';
import { itemProps as props } from '../constants';
import { createRangeInputDemoController } from '../controllers';

export default createDemoSectionData({
    title: 'step',
    items: [
        createDemoItem({ title: '0.1', props }, () => {
            const { value, handleValueChange } = createRangeInputDemoController({
                value: '9.99',
            });
            return (
                <>
                    <RangeInput value={value()} onValueChange={handleValueChange} step={0.1} />;
                    <Label>Current value: {value()}</Label>
                </>
            );
        }),
        createDemoItem({ title: '1', props: { ...props, defaultValue: true } }, () => {
            const { value, handleValueChange } = createRangeInputDemoController({
                value: '55',
            });
            return (
                <>
                    <RangeInput value={value()} onValueChange={handleValueChange} step={1} />;
                    <Label>Current value: {value()}</Label>
                </>
            );
        }),
        createDemoItem({ title: '50', props }, () => {
            const { value, handleValueChange } = createRangeInputDemoController({
                value: '1250',
            });
            return (
                <>
                    <RangeInput
                        value={value()}
                        onValueChange={handleValueChange}
                        step={50}
                        min={500}
                        max={1500}
                    />
                    ;<Label>Current value: {value()}</Label>
                </>
            );
        }),
    ],
});
