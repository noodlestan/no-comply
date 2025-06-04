import { Display } from '@no-comply/standard-ui';

import { LoremIpsum, createDemoItem, createDemoSectionData } from '../../../../../../content';
import { itemProps as props } from '../constants';

export default createDemoSectionData({
    title: 'tag ',
    items: [
        createDemoItem({ title: 'div', props }, () => (
            <Display tag="div">
                <LoremIpsum words={5} />
            </Display>
        )),
        createDemoItem({ title: 'h3', props: { ...props, defaultValue: true } }, () => (
            <Display tag="h3">
                <LoremIpsum words={3} />
            </Display>
        )),
        createDemoItem({ title: 'p', props: { ...props, defaultValue: true } }, () => (
            <Display tag="p">
                <LoremIpsum words={4} />
            </Display>
        )),
        createDemoItem({ title: 'span', props: { ...props, defaultValue: true } }, () => (
            <Display tag="span">
                <LoremIpsum words={3} />
            </Display>
        )),
    ],
});
