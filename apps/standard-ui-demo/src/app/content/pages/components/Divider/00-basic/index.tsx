import { Display, Divider, Text } from '@no-comply/standard-ui';

import { LoremIpsum } from '../../../../components';
import { createDocsItemData, createDocsSectionData } from '../../../../types';
import { itemProps as props } from '../constants';

export default createDocsSectionData({
    title: 'Basic usage',
    items: [
        createDocsItemData({ props }, () => (
            <>
                <Display variant="m">
                    <LoremIpsum words={3} />
                </Display>
                <Divider orientation="horizontal" />
                <Text variant="medium">
                    <LoremIpsum words={3} />
                </Text>
            </>
        )),
    ],
});
