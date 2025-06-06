import { Flex } from '@no-comply/standard-ui';

import { ExampleLayoutChild } from '../../../../examples';
import { createDocsItemData, createDocsSectionData } from '../../../../types';
import { itemProps as props } from '../constants';

export default createDocsSectionData({
    title: 'Basic usage',
    items: [
        createDocsItemData({ props }, () => (
            <Flex>
                <ExampleLayoutChild />
                <ExampleLayoutChild />
                <ExampleLayoutChild />
            </Flex>
        )),
    ],
});
