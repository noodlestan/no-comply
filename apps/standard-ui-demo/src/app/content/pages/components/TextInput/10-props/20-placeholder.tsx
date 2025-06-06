import { TextInput } from '@no-comply/standard-ui';

import { createDocsItemData, createDocsSectionData } from '../../../../types';
import { itemProps as props } from '../constants';
import { createTextInputExampleController } from '../controllers';

const placeholder = createDocsItemData({ props }, () => {
    const { value, handleValueChange } = createTextInputExampleController();
    return (
        <TextInput
            value={value()}
            onValueChange={handleValueChange}
            placeholder="suggestions: Cats, Dogs, ..."
        />
    );
});

export default createDocsSectionData({
    title: 'placeholder',
    items: [placeholder],
});
