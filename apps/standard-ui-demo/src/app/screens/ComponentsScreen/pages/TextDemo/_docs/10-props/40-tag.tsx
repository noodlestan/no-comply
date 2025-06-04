import { Text } from '@no-comply/standard-ui';

import { LoremIpsum, createDemoItem, createDemoSectionData } from '../../../../../../content';
import { itemProps as props } from '../constants';

export default createDemoSectionData({
    title: 'tag ',
    items: [
        createDemoItem({ title: 'div', props }, () => (
            <Text tag="div">
                <LoremIpsum words={9} />
            </Text>
        )),
        createDemoItem({ title: 'h3', props }, () => (
            <Text tag="h3">
                <LoremIpsum words={7} />
            </Text>
        )),
        createDemoItem({ title: 'span', props: { ...props, defaultValue: true } }, () => (
            <Text tag="span">
                <LoremIpsum words={8} />
            </Text>
        )),
        createDemoItem({ title: 'p', props: { ...props, defaultValue: true } }, () => (
            <Text tag="p">
                <LoremIpsum words={6} />
            </Text>
        )),
    ],
});
