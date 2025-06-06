import { Display, Link, Text } from '@no-comply/standard-ui';

import { LoremIpsum } from '../../../../components';
import { createDocsItemData, createDocsSectionData } from '../../../../types';
import { itemProps as props } from '../constants';

export default createDocsSectionData({
    title: 'Basic usage',
    items: [
        createDocsItemData({ props }, () => (
            <Text>
                <LoremIpsum words={9} />{' '}
                <Link href="https://noodlestan.org">Noodlestan Collective</Link>{' '}
                <LoremIpsum words={11} />
            </Text>
        )),
        createDocsItemData({ title: 'inside Display', props }, () => (
            <Display level={3}>
                <LoremIpsum words={2} />{' '}
                <Link href="https://noodlestan.org">Noodlestan Collective</Link>{' '}
                <LoremIpsum words={1} />
            </Display>
        )),
    ],
});
