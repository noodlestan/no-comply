import { Label } from '@no-comply/standard-ui';

import { LoremIpsum, createDemoItem, createDemoSectionData } from '../../../../../../content';
import { itemPropsWrap as props } from '../constants';

export default createDemoSectionData({
    title: 'nowrap ',
    items: [
        createDemoItem({ title: 'true', props }, () => (
            <Label variant="normal" nowrap>
                <LoremIpsum words={50} />
            </Label>
        )),
        createDemoItem({ title: 'false', props: { ...props, defaultValue: true } }, () => (
            <Label variant="normal">
                <LoremIpsum words={50} />
            </Label>
        )),
    ],
});
