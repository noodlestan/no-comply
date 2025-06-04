import { Callout } from '@no-comply/standard-ui';

import {
    LoremIpsum,
    createDemoItem,
    createDemoSectionData,
    lipsumWords,
} from '../../../../../../content';
import { itemProps as props } from '../constants';

const items = [
    createDemoItem({ title: 'medium', props }, () => (
        <Callout title={lipsumWords(5)} variant="success" size="medium">
            <LoremIpsum words={12} />
        </Callout>
    )),
];

export default createDemoSectionData({
    title: 'onClose',
    items,
});
