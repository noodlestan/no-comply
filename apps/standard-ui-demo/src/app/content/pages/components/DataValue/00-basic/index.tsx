import { DataValue } from '@no-comply/standard-ui';

import { LoremIpsum } from '../../../../components';
import { createDocsItemData, createDocsSectionData } from '../../../../types';
import { itemProps as props } from '../constants';

export default createDocsSectionData({
    title: 'Basic usage',
    items: [
        createDocsItemData({ props }, () => (
            <DataValue>
                <LoremIpsum words={2} />
            </DataValue>
        )),
    ],
});
