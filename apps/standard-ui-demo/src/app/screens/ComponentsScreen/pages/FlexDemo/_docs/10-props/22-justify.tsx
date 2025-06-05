import type { FlexJustify } from '@no-comply/solid-composables';
import type { ResponsiveValue } from '@no-comply/solid-primitives';
import { type BreakpointName, Flex } from '@no-comply/standard-ui';

import { createDemoItem, createDemoSectionData } from '../../../../../../content';
import { ExampleLayoutChild } from '../../../../../../examples';
import { itemPropsJustify } from '../constants';

const RESPONSIVE_JUSTIFY: ResponsiveValue<FlexJustify, BreakpointName> = {
    _: 'start',
    m: 'between',
    l: 'center',
};
const props = { ...itemPropsJustify, bps: Object.keys(RESPONSIVE_JUSTIFY) };

export default createDemoSectionData({
    title: 'justify',
    items: [
        createDemoItem({ title: 'center', props }, () => (
            <Flex direction="row" gap="s" justify="center">
                <ExampleLayoutChild />
                <ExampleLayoutChild />
                <ExampleLayoutChild />
            </Flex>
        )),
        createDemoItem({ title: 'start', props: { ...props, defaultValue: true } }, () => (
            <Flex direction="row" gap="s" justify="start">
                <ExampleLayoutChild />
                <ExampleLayoutChild />
                <ExampleLayoutChild />
            </Flex>
        )),
        createDemoItem({ title: 'end', props }, () => (
            <Flex direction="row" gap="s" justify="end">
                <ExampleLayoutChild />
                <ExampleLayoutChild />
                <ExampleLayoutChild />
            </Flex>
        )),
        createDemoItem({ title: 'around', props }, () => (
            <Flex direction="row" gap="s" justify="around">
                <ExampleLayoutChild />
                <ExampleLayoutChild />
                <ExampleLayoutChild />
            </Flex>
        )),
        createDemoItem({ title: 'between', props }, () => (
            <Flex direction="row" gap="s" justify="between">
                <ExampleLayoutChild />
                <ExampleLayoutChild />
                <ExampleLayoutChild />
            </Flex>
        )),
        // ResponsiveDemoItem
        createDemoItem({ title: 'responsive', props }, () => (
            <Flex direction="row" justify={RESPONSIVE_JUSTIFY}>
                <ExampleLayoutChild style={{ height: '100%' }} />
                <ExampleLayoutChild style={{ height: '100%' }} />
                <ExampleLayoutChild style={{ height: '100%' }} />
            </Flex>
        )),
    ],
});
