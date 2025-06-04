import { TextInput } from '@no-comply/standard-ui';

import { createDemoItem, createDemoSectionData } from '../../../../../../content';
import { itemProps as props } from '../constants';
import { createTextInputDemoController } from '../controllers';

const placeholder = createDemoItem({ props }, () => {
    const { value, handleValueChange } = createTextInputDemoController();
    return (
        <TextInput
            value={value()}
            onValueChange={handleValueChange}
            placeholder="suggestions: Cats, Dogs, ..."
        />
    );
});

export default createDemoSectionData({
    title: 'placeholder',
    items: [placeholder],
});
