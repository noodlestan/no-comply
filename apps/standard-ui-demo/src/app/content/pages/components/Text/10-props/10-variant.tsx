import { Text } from '@no-comply/standard-ui';

import { LoremIpsum } from '../../../../components';
import { createDocsItemData, createDocsSectionData } from '../../../../types';
import { itemProps as props } from '../constants';

export default createDocsSectionData({
    title: 'variant ',
    items: [
        createDocsItemData({ title: 'large', props }, () => (
            <Text variant="large">
                <LoremIpsum words={9} />
            </Text>
        )),
        createDocsItemData({ title: 'medium', props }, () => (
            <Text variant="medium">
                <LoremIpsum words={9} />
            </Text>
        )),
        createDocsItemData({ title: 'normal', props: { ...props, defaultValue: true } }, () => (
            <Text variant="normal">
                <LoremIpsum words={9} />
            </Text>
        )),
        createDocsItemData({ title: 'small', props }, () => (
            <Text variant="small">
                <LoremIpsum words={9} />
            </Text>
        )),
    ],
});
