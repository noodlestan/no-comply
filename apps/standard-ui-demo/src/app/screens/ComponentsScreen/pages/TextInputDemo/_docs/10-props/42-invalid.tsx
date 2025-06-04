import { TextInput } from '@no-comply/standard-ui';

import { createDemoItem, createDemoSectionData, lipsumWords } from '../../../../../../content';
import { itemProps as props } from '../constants';
import { createTextInputDemoController } from '../controllers';

export default createDemoSectionData({
    title: 'invalid',
    items: [
        createDemoItem({ props }, () => {
            const { value, handleValueChange } = createTextInputDemoController({
                value: lipsumWords(3),
            });
            return <TextInput value={value()} onValueChange={handleValueChange} invalid />;
        }),
    ],
});
