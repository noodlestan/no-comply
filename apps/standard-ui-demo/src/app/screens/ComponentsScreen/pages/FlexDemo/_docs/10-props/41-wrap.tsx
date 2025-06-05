import type { ResponsiveValue } from '@no-comply/solid-primitives';
import { type BreakpointName, Flex } from '@no-comply/standard-ui';

import { createDemoItem, createDemoSectionData } from '../../../../../../content';
import { ExampleLayoutChild } from '../../../../../../examples';
import { itemPropsSized } from '../constants';

const RESPONSIVE_WRAP: ResponsiveValue<boolean, BreakpointName> = {
    _: true,
    m: false,
    l: true,
};
const props = { ...itemPropsSized, bps: Object.keys(RESPONSIVE_WRAP) };

export default createDemoSectionData({
    title: 'wrap',
    items: [
        createDemoItem({ title: 'wrap', props }, () => (
            <Flex direction="row" gap="s" wrap={true}>
                <ExampleLayoutChild size="small" />
                <ExampleLayoutChild size="small" />
            </Flex>
        )),
        createDemoItem(
            { title: 'no wrap (default)', props: { ...props, defaultValue: true } },
            () => (
                <Flex direction="row" gap="s" wrap={false}>
                    <ExampleLayoutChild size="small" />
                    <ExampleLayoutChild size="small" />
                </Flex>
            ),
        ),
        // ResponsiveDemoItem
        createDemoItem({ title: 'responsive', props }, () => (
            <Flex direction="row" wrap={RESPONSIVE_WRAP}>
                <ExampleLayoutChild size="small" />
                <ExampleLayoutChild size="small" />
            </Flex>
        )),
    ],
});
