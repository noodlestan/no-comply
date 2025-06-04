import { TextInput } from '@no-comply/standard-ui';

import { createDemoItem, createDemoSectionData, lipsumWords } from '../../../../../../content';
import { itemProps as props } from '../constants';
import { createTextInputDemoController } from '../controllers';

export default createDemoSectionData({
    title: 'size',
    items: [
        createDemoItem({ title: 'l', props }, () => {
            const { value, handleValueChange } = createTextInputDemoController({
                value: lipsumWords(3),
            });
            return <TextInput value={value()} onValueChange={handleValueChange} size="l" />;
        }),
        createDemoItem({ title: 'm', props }, () => {
            const { value, handleValueChange } = createTextInputDemoController({
                value: lipsumWords(3),
            });
            return <TextInput value={value()} onValueChange={handleValueChange} size="m" />;
        }),
        createDemoItem({ title: 's', props }, () => {
            const { value, handleValueChange } = createTextInputDemoController({
                value: lipsumWords(3),
            });
            return <TextInput value={value()} onValueChange={handleValueChange} size="s" />;
        }),
        createDemoItem({ title: 'xs', props }, () => {
            const { value, handleValueChange } = createTextInputDemoController({
                value: lipsumWords(3),
            });
            return <TextInput value={value()} onValueChange={handleValueChange} size="xs" />;
        }),
    ],
});
