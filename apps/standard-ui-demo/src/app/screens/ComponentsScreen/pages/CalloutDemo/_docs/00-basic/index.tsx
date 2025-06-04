import { Callout } from '@no-comply/standard-ui';

import {
    LoremIpsum,
    createDemoItem,
    createDemoSectionData,
    lipsumWords,
} from '../../../../../../content';

export default createDemoSectionData({
    title: 'Basic usage',
    items: [
        createDemoItem({}, () => (
            <Callout title={lipsumWords()} variant="info">
                <LoremIpsum words={30} />
            </Callout>
        )),
    ],
});
