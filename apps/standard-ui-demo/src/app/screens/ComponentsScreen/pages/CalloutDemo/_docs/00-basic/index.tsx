import { Callout } from '@no-comply/standard-ui';

import {
    LoremIpsum,
    createDemoItem,
    createDemoSection,
    lipsumWords,
} from '../../../../../../components';

export default createDemoSection({
    title: 'Basic usage',
    items: [
        createDemoItem({}, () => (
            <Callout title={lipsumWords()} variant="info">
                <LoremIpsum words={30} />
            </Callout>
        )),
    ],
});
