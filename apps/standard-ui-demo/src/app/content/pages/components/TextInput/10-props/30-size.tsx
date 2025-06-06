import { TextInput } from '@no-comply/standard-ui';

import { lipsumWords } from '../../../../components';
import { createDocsItemData, createDocsSectionData } from '../../../../types';
import { itemProps as props } from '../constants';
import { createTextInputExampleController } from '../controllers';

export default createDocsSectionData({
    title: 'size',
    items: [
        createDocsItemData({ title: 'l', props }, () => {
            const { value, handleValueChange } = createTextInputExampleController({
                value: lipsumWords(3),
            });
            return <TextInput value={value()} onValueChange={handleValueChange} size="l" />;
        }),
        createDocsItemData({ title: 'm', props }, () => {
            const { value, handleValueChange } = createTextInputExampleController({
                value: lipsumWords(3),
            });
            return <TextInput value={value()} onValueChange={handleValueChange} size="m" />;
        }),
        createDocsItemData({ title: 's', props }, () => {
            const { value, handleValueChange } = createTextInputExampleController({
                value: lipsumWords(3),
            });
            return <TextInput value={value()} onValueChange={handleValueChange} size="s" />;
        }),
        createDocsItemData({ title: 'xs', props }, () => {
            const { value, handleValueChange } = createTextInputExampleController({
                value: lipsumWords(3),
            });
            return <TextInput value={value()} onValueChange={handleValueChange} size="xs" />;
        }),
    ],
});
