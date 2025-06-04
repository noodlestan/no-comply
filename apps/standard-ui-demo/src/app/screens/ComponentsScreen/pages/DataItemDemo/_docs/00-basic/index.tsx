import { DataItem } from '@no-comply/standard-ui';

import { LoremIpsum, createDemoItem, createDemoSectionData } from '../../../../../../content';
import { itemProps as props } from '../constants';

export default createDemoSectionData({
    title: 'Basic usage',
    items: [
        createDemoItem({ props }, () => (
            <DataItem>
                <LoremIpsum words={2} />
            </DataItem>
        )),
    ],
});
