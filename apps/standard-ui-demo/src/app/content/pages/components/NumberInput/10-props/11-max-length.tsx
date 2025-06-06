import { NumberInput } from '@no-comply/standard-ui';

import { createDocsItemData, createDocsSectionData } from '../../../../types';
import { itemProps as props } from '../constants';
import { createNumberInputExampleController } from '../controllers';

export default createDocsSectionData({
    title: 'maxLength',
    items: [
        createDocsItemData({ title: 'number (3)', props }, () => {
            const { value, handleValueChange } = createNumberInputExampleController({
                value: '123',
            });
            return <NumberInput value={value()} onValueChange={handleValueChange} maxLength={3} />;
        }),
    ],
});
