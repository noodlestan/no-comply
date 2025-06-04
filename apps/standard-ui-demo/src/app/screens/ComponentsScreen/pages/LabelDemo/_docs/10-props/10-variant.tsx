import { Label } from '@no-comply/standard-ui';

import { LoremIpsum, createDemoItem, createDemoSectionData } from '../../../../../../content';
import { itemProps as props } from '../constants';

export default createDemoSectionData({
    title: 'variant ',
    items: [
        createDemoItem({ title: 'large', props }, () => (
            <Label variant="large">
                <LoremIpsum words={2} />
            </Label>
        )),
        createDemoItem({ title: 'medium', props }, () => (
            <Label variant="medium">
                <LoremIpsum words={2} />
            </Label>
        )),
        createDemoItem({ title: 'normal', props: { ...props, defaultValue: true } }, () => (
            <Label variant="normal">
                <LoremIpsum words={2} />
            </Label>
        )),
        createDemoItem({ title: 'small', props }, () => (
            <Label variant="small">
                <LoremIpsum words={2} />
            </Label>
        )),
        createDemoItem({ title: 'small', props }, () => (
            <Label variant="small">
                <LoremIpsum words={2} />
            </Label>
        )),
    ],
});
