import { Display } from '@no-comply/standard-ui';

import { LoremIpsum } from '../../../../components';
import { createDocsItemData, createDocsSectionData } from '../../../../types';
import { itemProps as props } from '../constants';

export default createDocsSectionData({
    title: 'Basic usage (h3)',
    items: [
        createDocsItemData({ props }, () => (
            <Display>
                <LoremIpsum words={5} />
            </Display>
        )),
    ],
});
