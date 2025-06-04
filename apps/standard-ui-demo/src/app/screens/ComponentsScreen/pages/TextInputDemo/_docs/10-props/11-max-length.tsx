import { TextInput } from '@no-comply/standard-ui';

import { createDemoItem, createDemoSectionData, lipsumWords } from '../../../../../../content';
import { itemProps as props } from '../constants';
import { createTextInputDemoController } from '../controllers';

export default createDemoSectionData({
    title: 'maxLength',
    items: [
        createDemoItem({ title: 'number (3)', props }, () => {
            const { value, handleValueChange } = createTextInputDemoController({
                value: lipsumWords(3),
            });
            return <TextInput value={value()} onValueChange={handleValueChange} maxLength={3} />;
        }),
    ],
});
