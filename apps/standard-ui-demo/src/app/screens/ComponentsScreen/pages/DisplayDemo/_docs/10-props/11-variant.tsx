import { Display } from '@no-comply/standard-ui';

import { LoremIpsum, createDemoItem, createDemoSectionData } from '../../../../../../content';
import { itemProps as props } from '../constants';

export default createDemoSectionData({
    title: 'variant ',
    items: [
        createDemoItem({ title: 'hero', props }, () => (
            <Display variant="hero">
                <LoremIpsum words={3} />
            </Display>
        )),
        createDemoItem({ title: 'xl', props }, () => (
            <Display variant="xl">
                <LoremIpsum words={4} />
            </Display>
        )),
        createDemoItem({ title: 'l', props }, () => (
            <Display variant="l">
                <LoremIpsum words={5} />
            </Display>
        )),
        createDemoItem({ title: 'm', props }, () => (
            <Display variant="m">
                <LoremIpsum words={7} />
            </Display>
        )),
        createDemoItem({ title: 's', props }, () => (
            <Display variant="s">
                <LoremIpsum words={5} />
            </Display>
        )),
        createDemoItem({ title: 'xs', props }, () => (
            <Display variant="xs">
                <LoremIpsum words={7} />
            </Display>
        )),
        createDemoItem({ title: 'variant "s" with level 1', props }, () => (
            <Display variant="s" level={1}>
                <LoremIpsum words={7} />
            </Display>
        )),
    ],
});
