import type { FlexAlign } from '@no-comply/solid-composables';
import type { ResponsiveValue } from '@no-comply/solid-primitives';
import { type BreakpointName, Flex } from '@no-comply/standard-ui';

import { createDemoItem, createDemoSectionData } from '../../../../../../content';
import { ExampleLayoutChild } from '../../../../../../examples';
import { itemProps } from '../constants';

const RESPONSIVE_ALIGN: ResponsiveValue<FlexAlign, BreakpointName> = {
    _: 'stretch',
    m: 'center',
    l: 'start',
};
const props = { ...itemProps, bps: Object.keys(RESPONSIVE_ALIGN) };

export default createDemoSectionData({
    title: 'align',
    items: [
        createDemoItem({ title: 'stretch', props }, () => (
            <Flex direction="row" gap="s" align="stretch">
                <ExampleLayoutChild
                    style={{ padding: '5px', 'max-width': '100px' }}
                    content="Lorem ipsum dolor sit amet"
                />
                <ExampleLayoutChild style={{ 'padding-block': '35px' }} />
                <ExampleLayoutChild />
            </Flex>
        )),
        createDemoItem({ title: 'start', props: { ...props, defaultValue: true } }, () => (
            <Flex direction="row" gap="s" align="start">
                <ExampleLayoutChild
                    style={{ padding: '5px', 'max-width': '100px' }}
                    content="Lorem ipsum dolor sit amet"
                />
                <ExampleLayoutChild style={{ 'padding-block': '35px' }} />
                <ExampleLayoutChild />
            </Flex>
        )),
        createDemoItem({ title: 'center', props }, () => (
            <Flex direction="row" gap="s" align="center">
                <ExampleLayoutChild
                    style={{ padding: '5px', 'max-width': '100px' }}
                    content="Lorem ipsum dolor sit amet"
                />
                <ExampleLayoutChild style={{ 'padding-block': '35px' }} />
                <ExampleLayoutChild />
            </Flex>
        )),
        createDemoItem({ title: 'baseline', props }, () => (
            <Flex direction="row" gap="s" align="baseline">
                <ExampleLayoutChild
                    style={{ padding: '5px', 'max-width': '100px' }}
                    content="Lorem ipsum dolor sit amet"
                />
                <ExampleLayoutChild style={{ 'padding-block': '35px' }} />
                <ExampleLayoutChild />
            </Flex>
        )),
        createDemoItem({ title: 'end', props }, () => (
            <Flex direction="row" gap="s" align="end">
                <ExampleLayoutChild
                    style={{ padding: '5px', 'max-width': '100px' }}
                    content="Lorem ipsum dolor sit amet"
                />
                <ExampleLayoutChild style={{ 'padding-block': '35px' }} />
                <ExampleLayoutChild />
            </Flex>
        )),
        // ResponsiveDemoItem
        createDemoItem({ title: 'responsive', props }, () => (
            <Flex direction="row" align={RESPONSIVE_ALIGN}>
                <ExampleLayoutChild
                    style={{ padding: '5px', 'max-width': '100px' }}
                    content="Lorem ipsum dolor sit amet"
                />
                <ExampleLayoutChild style={{ 'padding-block': '35px' }} />
                <ExampleLayoutChild />
            </Flex>
        )),
    ],
});
