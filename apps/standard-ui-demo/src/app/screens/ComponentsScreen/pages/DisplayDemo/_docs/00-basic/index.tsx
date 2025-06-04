import { Display } from '@no-comply/standard-ui';

import { LoremIpsum, createDemoItem, createDemoSectionData } from '../../../../../../content';
import { itemProps as props } from '../constants';

export default createDemoSectionData({
    title: 'Basic usage (h3)',
    items: [
        createDemoItem({ props }, () => (
            <Display>
                <LoremIpsum words={5} />
            </Display>
        )),
    ],
});
