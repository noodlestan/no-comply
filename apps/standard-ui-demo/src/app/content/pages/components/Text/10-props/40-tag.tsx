import { Text } from '@no-comply/standard-ui';

import { LoremIpsum } from '../../../../components';
import { createDocsItemData, createDocsSectionData } from '../../../../types';
import { itemProps as props } from '../constants';

export default createDocsSectionData({
    title: 'tag ',
    items: [
        createDocsItemData({ title: 'div', props }, () => (
            <Text tag="div">
                <LoremIpsum words={9} />
            </Text>
        )),
        createDocsItemData({ title: 'h3', props }, () => (
            <Text tag="h3">
                <LoremIpsum words={7} />
            </Text>
        )),
        createDocsItemData({ title: 'span', props: { ...props, defaultValue: true } }, () => (
            <Text tag="span">
                <LoremIpsum words={8} />
            </Text>
        )),
        createDocsItemData({ title: 'p', props: { ...props, defaultValue: true } }, () => (
            <Text tag="p">
                <LoremIpsum words={6} />
            </Text>
        )),
    ],
});
