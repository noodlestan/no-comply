import { Text } from '@no-comply/standard-ui';

import { LoremIpsum, createDemoItem, createDemoSectionData } from '../../../../../../content';
import { itemProps as props } from '../constants';

export default createDemoSectionData({
    title: 'variant ',
    items: [
        createDemoItem({ title: 'large', props }, () => (
            <Text variant="large">
                <LoremIpsum words={9} />
            </Text>
        )),
        createDemoItem({ title: 'medium', props }, () => (
            <Text variant="medium">
                <LoremIpsum words={9} />
            </Text>
        )),
        createDemoItem({ title: 'normal', props: { ...props, defaultValue: true } }, () => (
            <Text variant="normal">
                <LoremIpsum words={9} />
            </Text>
        )),
        createDemoItem({ title: 'small', props }, () => (
            <Text variant="small">
                <LoremIpsum words={9} />
            </Text>
        )),
    ],
});
