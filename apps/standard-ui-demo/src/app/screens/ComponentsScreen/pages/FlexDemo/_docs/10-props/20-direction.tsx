import type { FlexDirection } from '@no-comply/solid-composables';
import type { ResponsiveValue } from '@no-comply/solid-primitives';
import { type BreakpointName, Flex } from '@no-comply/standard-ui';

import { createDemoItem, createDemoSectionData } from '../../../../../../content';
import { ExampleLayoutChild } from '../../../../../../examples';
import { itemProps } from '../constants';

const RESPONSIVE_DIRECTION: ResponsiveValue<FlexDirection, BreakpointName> = {
    _: 'column',
    m: 'row',
    l: 'column-reverse',
};
const props = { ...itemProps, bps: Object.keys(RESPONSIVE_DIRECTION) };

export default createDemoSectionData({
    title: 'direction',
    items: [
        createDemoItem({ title: 'column', props }, () => (
            <Flex gap="s" direction="column">
                <ExampleLayoutChild content="Item 1" />
                <ExampleLayoutChild content="Item 2" />
                <ExampleLayoutChild content="Item 3" />
            </Flex>
        )),
        createDemoItem({ title: 'row', props }, () => (
            <Flex gap="s" direction="row">
                <ExampleLayoutChild content="Item 1" />
                <ExampleLayoutChild content="Item 2" />
                <ExampleLayoutChild content="Item 3" />
            </Flex>
        )),
        createDemoItem({ title: 'column-reverse', props }, () => (
            <Flex gap="s" direction="column-reverse">
                <ExampleLayoutChild content="Item 1" />
                <ExampleLayoutChild content="Item 2" />
                <ExampleLayoutChild content="Item 3" />
            </Flex>
        )),
        createDemoItem({ title: 'row-reverse', props }, () => (
            <Flex gap="s" direction="row-reverse">
                <ExampleLayoutChild content="Item 1" />
                <ExampleLayoutChild content="Item 2" />
                <ExampleLayoutChild content="Item 3" />
            </Flex>
        )),
        // ResponsiveDemoItem
        createDemoItem({ title: 'responsive', props }, () => (
            <Flex direction={RESPONSIVE_DIRECTION}>
                <ExampleLayoutChild content="Item 1" />
                <ExampleLayoutChild content="Item 2" />
                <ExampleLayoutChild content="Item 3" />
            </Flex>
        )),
    ],
});
