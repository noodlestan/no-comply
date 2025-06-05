import type { ResponsiveValue } from '@no-comply/solid-primitives';
import { type BreakpointName, Flex, type LayoutPadding } from '@no-comply/standard-ui';

import { createDemoItem, createDemoSectionData } from '../../../../../../content';
import { ExampleLayoutChild } from '../../../../../../examples';
import { itemProps } from '../constants';

const RESPONSIVE_GAP: ResponsiveValue<LayoutPadding, BreakpointName> = {
    _: 'xs',
    m: 'm',
    l: 'xl',
} as const;

const props = { ...itemProps, bps: Object.keys(RESPONSIVE_GAP) };

export default createDemoSectionData({
    title: 'gap',
    items: [
        createDemoItem({ title: '2xl', props }, () => (
            <Flex direction="row" gap="2xl">
                <ExampleLayoutChild />
                <ExampleLayoutChild />
            </Flex>
        )),
        createDemoItem({ title: 'xl', props }, () => (
            <Flex direction="row" gap="xl">
                <ExampleLayoutChild />
                <ExampleLayoutChild />
            </Flex>
        )),
        createDemoItem({ title: 'l', props }, () => (
            <Flex direction="row" gap="l">
                <ExampleLayoutChild />
                <ExampleLayoutChild />
            </Flex>
        )),
        createDemoItem({ title: 'm', props }, () => (
            <Flex direction="row" gap="m">
                <ExampleLayoutChild />
                <ExampleLayoutChild />
            </Flex>
        )),
        createDemoItem({ title: 's', props }, () => (
            <Flex direction="row" gap="s">
                <ExampleLayoutChild />
                <ExampleLayoutChild />
            </Flex>
        )),
        createDemoItem({ title: 'xs', props }, () => (
            <Flex direction="row" gap="xs">
                <ExampleLayoutChild />
                <ExampleLayoutChild />
            </Flex>
        )),
        createDemoItem({ title: 'none', props }, () => (
            <Flex direction="row" gap="none">
                <ExampleLayoutChild />
                <ExampleLayoutChild />
            </Flex>
        )),
        // ResponsiveDemoItem
        createDemoItem({ title: 'responsive', props }, () => (
            <Flex direction="row" gap={RESPONSIVE_GAP}>
                <ExampleLayoutChild />
                <ExampleLayoutChild />
            </Flex>
        )),
    ],
});
