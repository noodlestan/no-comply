import { type BreakpointName, Flex, type FlexProps } from '@no-comply/standard-ui';

import { ExampleLayoutChild } from '../../../../examples';
import {
    createDocsItemData,
    createDocsResponsiveItemData,
    createDocsSectionData,
} from '../../../../types';
import { itemProps as props } from '../constants';

const RESPONSIVE_DIRECTION: FlexProps['direction'] = {
    _: 'column',
    m: 'row',
    l: 'column-reverse',
};

const BPS = Object.keys(RESPONSIVE_DIRECTION) as BreakpointName[];

export default createDocsSectionData({
    title: 'direction',
    items: [
        createDocsItemData({ title: 'column', props }, () => (
            <Flex gap="s" direction="column">
                <ExampleLayoutChild content="Item 1" />
                <ExampleLayoutChild content="Item 2" />
                <ExampleLayoutChild content="Item 3" />
            </Flex>
        )),
        createDocsItemData({ title: 'row', props }, () => (
            <Flex gap="s" direction="row">
                <ExampleLayoutChild content="Item 1" />
                <ExampleLayoutChild content="Item 2" />
                <ExampleLayoutChild content="Item 3" />
            </Flex>
        )),
        createDocsItemData({ title: 'column-reverse', props }, () => (
            <Flex gap="s" direction="column-reverse">
                <ExampleLayoutChild content="Item 1" />
                <ExampleLayoutChild content="Item 2" />
                <ExampleLayoutChild content="Item 3" />
            </Flex>
        )),
        createDocsItemData({ title: 'row-reverse', props }, () => (
            <Flex gap="s" direction="row-reverse">
                <ExampleLayoutChild content="Item 1" />
                <ExampleLayoutChild content="Item 2" />
                <ExampleLayoutChild content="Item 3" />
            </Flex>
        )),
        createDocsResponsiveItemData(BPS, { title: 'responsive', props }, () => (
            <Flex direction={RESPONSIVE_DIRECTION}>
                <ExampleLayoutChild content="Item 1" />
                <ExampleLayoutChild content="Item 2" />
                <ExampleLayoutChild content="Item 3" />
            </Flex>
        )),
    ],
});
