import { Display, Divider, Text } from '@no-comply/standard-ui';

import { LoremIpsum, createDemoItem, createDemoSectionData } from '../../../../../../content';
import { itemProps as props } from '../constants';

export default createDemoSectionData({
    title: 'Basic usage',
    items: [
        createDemoItem({ props }, () => (
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
