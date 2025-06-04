import { Label } from '@no-comply/standard-ui';

import { LoremIpsum, createDemoItem, createDemoSectionData } from '../../../../../../content';
import { itemProps as props } from '../constants';

export default createDemoSectionData({
    title: 'tag ',
    items: [
        createDemoItem({ title: 'span', props }, () => (
            <Label tag="span">
                <LoremIpsum words={9} />
            </Label>
        )),
        createDemoItem({ title: 'label', props: { ...props, defaultValue: true } }, () => (
            <Label tag="label">
                <LoremIpsum words={8} />
            </Label>
        )),
    ],
});
