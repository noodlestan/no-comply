import { Checkbox } from '@no-comply/standard-ui';

import { createDocsItemData, createDocsSectionData } from '../../../../types';
import { itemProps as props } from '../constants';
import { createCheckboxExampleController } from '../controllers';

export default createDocsSectionData({
    title: 'size',
    items: [
        createDocsItemData({ title: 'l', props }, () => {
            const { value, handleValueChange } = createCheckboxExampleController();
            return <Checkbox checked={value()} onValueChange={handleValueChange} size="l" />;
        }),
        createDocsItemData({ title: 'm', props }, () => {
            const { value, handleValueChange } = createCheckboxExampleController();
            return <Checkbox checked={value()} onValueChange={handleValueChange} size="m" />;
        }),
        createDocsItemData({ title: 's', props: { ...props, defaultValue: true } }, () => {
            const { value, handleValueChange } = createCheckboxExampleController();
            return <Checkbox checked={value()} onValueChange={handleValueChange} size="s" />;
        }),
    ],
});
