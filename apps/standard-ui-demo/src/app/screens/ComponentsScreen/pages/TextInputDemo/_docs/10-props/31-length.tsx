import { TextInput } from '@no-comply/standard-ui';

import { createDemoItem, createDemoSectionData, lipsumWords } from '../../../../../../content';
import { itemProps as props } from '../constants';
import { createTextInputDemoController } from '../controllers';

export default createDemoSectionData({
    title: 'length',
    items: [
        createDemoItem({ title: 'full', props }, () => {
            const { value, handleValueChange } = createTextInputDemoController({
                value: lipsumWords(3),
            });
            return <TextInput value={value()} onValueChange={handleValueChange} length="full" />;
        }),
        createDemoItem({ title: 'l', props }, () => {
            const { value, handleValueChange } = createTextInputDemoController({
                value: lipsumWords(3),
            });
            return <TextInput value={value()} onValueChange={handleValueChange} length="l" />;
        }),
        createDemoItem({ title: 'm', props }, () => {
            const { value, handleValueChange } = createTextInputDemoController({
                value: lipsumWords(3),
            });
            return <TextInput value={value()} onValueChange={handleValueChange} length="m" />;
        }),
        createDemoItem({ title: 's', props }, () => {
            const { value, handleValueChange } = createTextInputDemoController({
                value: lipsumWords(3),
            });
            return <TextInput value={value()} onValueChange={handleValueChange} length="s" />;
        }),
        createDemoItem({ title: 'number (3)', props }, () => {
            const { value, handleValueChange } = createTextInputDemoController({
                value: 'abc',
            });
            return <TextInput value={value()} onValueChange={handleValueChange} length={3} />;
        }),
        createDemoItem({ title: 'auto', props }, () => {
            const { value, handleValueChange } = createTextInputDemoController({
                value: lipsumWords(7),
            });
            return <TextInput value={value()} onValueChange={handleValueChange} length="auto" />;
        }),
    ],
});
