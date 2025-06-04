import { Display, Link, Text } from '@no-comply/standard-ui';

import { LoremIpsum, createDemoItem, createDemoSectionData } from '../../../../../../content';
import { itemProps as props } from '../constants';

export default createDemoSectionData({
    title: 'Basic usage',
    items: [
        createDemoItem({ props }, () => (
            <Text>
                <LoremIpsum words={9} />{' '}
                <Link href="https://noodlestan.org">Noodlestan Collective</Link>{' '}
                <LoremIpsum words={11} />
            </Text>
        )),
        createDemoItem({ title: 'inside Display', props }, () => (
            <Display level={3}>
                <LoremIpsum words={2} />{' '}
                <Link href="https://noodlestan.org">Noodlestan Collective</Link>{' '}
                <LoremIpsum words={1} />
            </Display>
        )),
    ],
});
