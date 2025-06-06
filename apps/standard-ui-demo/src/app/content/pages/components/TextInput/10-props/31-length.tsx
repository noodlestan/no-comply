import { TextInput } from '@no-comply/standard-ui';

import { lipsumWords } from '../../../../components';
import { createDocsItemData, createDocsSectionData } from '../../../../types';
import { itemProps as props } from '../constants';
import { createTextInputExampleController } from '../controllers';

export default createDocsSectionData({
    title: 'length',
    items: [
        createDocsItemData({ title: 'full', props }, () => {
            const { value, handleValueChange } = createTextInputExampleController({
                value: lipsumWords(3),
            });
            return <TextInput value={value()} onValueChange={handleValueChange} length="full" />;
        }),
        createDocsItemData({ title: 'l', props }, () => {
            const { value, handleValueChange } = createTextInputExampleController({
                value: lipsumWords(3),
            });
            return <TextInput value={value()} onValueChange={handleValueChange} length="l" />;
        }),
        createDocsItemData({ title: 'm', props }, () => {
            const { value, handleValueChange } = createTextInputExampleController({
                value: lipsumWords(3),
            });
            return <TextInput value={value()} onValueChange={handleValueChange} length="m" />;
        }),
        createDocsItemData({ title: 's', props }, () => {
            const { value, handleValueChange } = createTextInputExampleController({
                value: lipsumWords(3),
            });
            return <TextInput value={value()} onValueChange={handleValueChange} length="s" />;
        }),
        createDocsItemData({ title: 'number (3)', props }, () => {
            const { value, handleValueChange } = createTextInputExampleController({
                value: 'abc',
            });
            return <TextInput value={value()} onValueChange={handleValueChange} length={3} />;
        }),
        createDocsItemData({ title: 'auto', props }, () => {
            const { value, handleValueChange } = createTextInputExampleController({
                value: lipsumWords(7),
            });
            return <TextInput value={value()} onValueChange={handleValueChange} length="auto" />;
        }),
    ],
});
