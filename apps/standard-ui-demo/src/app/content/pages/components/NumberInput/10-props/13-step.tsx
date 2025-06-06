import { NumberInput } from '@no-comply/standard-ui';

import { createDocsItemData, createDocsSectionData } from '../../../../types';
import { itemProps as props } from '../constants';
import { createNumberInputExampleController } from '../controllers';

export default createDocsSectionData({
    title: 'step',
    items: [
        createDocsItemData({ title: '0.1', props }, () => {
            const { value, handleValueChange } = createNumberInputExampleController({
                value: '9.99',
            });
            return <NumberInput value={value()} onValueChange={handleValueChange} step={0.1} />;
        }),
        createDocsItemData({ title: '1', props: { ...props, defaultValue: true } }, () => {
            const { value, handleValueChange } = createNumberInputExampleController({
                value: '55',
            });
            return <NumberInput value={value()} onValueChange={handleValueChange} step={1} />;
        }),
        createDocsItemData({ title: '10', props }, () => {
            const { value, handleValueChange } = createNumberInputExampleController({
                value: '1100',
            });
            return <NumberInput value={value()} onValueChange={handleValueChange} step={10} />;
        }),
    ],
});
