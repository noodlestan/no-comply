import { NumberInput } from '@no-comply/standard-ui';

import { createDocsItemData, createDocsSectionData } from '../../../../types';
import { itemProps as props } from '../constants';
import { createNumberInputExampleController } from '../controllers';

export default createDocsSectionData({
    title: 'min and max',
    items: [
        createDocsItemData({ title: 'max (10)', props }, () => {
            const { value, handleValueChange } = createNumberInputExampleController({
                value: '9.99',
            });
            return <NumberInput value={value()} onValueChange={handleValueChange} max={10} />;
        }),
        createDocsItemData({ title: 'min (3)', props }, () => {
            const { value, handleValueChange } = createNumberInputExampleController({
                value: '9',
            });
            return <NumberInput value={value()} onValueChange={handleValueChange} min={3} />;
        }),
        createDocsItemData({ title: 'min (0) and max(5)', props }, () => {
            const { value, handleValueChange } = createNumberInputExampleController({
                value: '1',
            });
            return (
                <NumberInput value={value()} onValueChange={handleValueChange} min={0} max={5} />
            );
        }),
    ],
});
