import { Display } from '@no-comply/standard-ui';

import { LoremIpsum, createDemoItem, createDemoSectionData } from '../../../../../../content';
import { itemPropsWrap as props } from '../constants';

export default createDemoSectionData({
    title: 'nowrap ',
    items: [
        createDemoItem({ title: 'true', props }, () => (
            <Display variant="s" nowrap>
                <LoremIpsum words={50} />
            </Display>
        )),
        createDemoItem(
            { title: 'false', props: { ...props, width: '280px', defaultValue: true } },
            () => (
                <Display variant="s">
                    <LoremIpsum words={7} />
                </Display>
            ),
        ),
    ],
});
