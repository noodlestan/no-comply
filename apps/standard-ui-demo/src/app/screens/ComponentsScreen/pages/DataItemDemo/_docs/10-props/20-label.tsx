import { DataItem } from '@no-comply/standard-ui';

import {
    LoremIpsum,
    createDemoItem,
    createDemoSectionData,
    lipsumWords,
} from '../../../../../../content';
import { itemProps as props } from '../constants';

export default createDemoSectionData({
    title: 'label',
    items: [
        createDemoItem({ props }, () => (
            <DataItem label={lipsumWords(2)}>
                <LoremIpsum words={3} />
            </DataItem>
        )),
        createDemoItem({ props }, () => <DataItem label={lipsumWords(2)} value={lipsumWords(3)} />),
    ],
});
