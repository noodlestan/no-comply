import type { ResponsiveValue } from '@no-comply/solid-primitives';
import { type BreakpointName, Flex } from '@no-comply/standard-ui';

import { createDemoItem, createDemoSectionData } from '../../../../../../content';
import { ExampleLayoutChild, ExampleTiny } from '../../../../../../examples';
import { itemPropsSized } from '../constants';

const RESPONSIVE_SHRINK: ResponsiveValue<boolean, BreakpointName> = {
    _: true,
    m: false,
    l: true,
};
const props = { ...itemPropsSized, bps: Object.keys(RESPONSIVE_SHRINK) };

export default createDemoSectionData({
    title: 'shrink',
    items: [
        createDemoItem({ title: 'no shrink', props }, () => (
            <Flex gap="s" shrink={false}>
                <ExampleLayoutChild content={<ExampleTiny />} />
            </Flex>
        )),
        createDemoItem(
            { title: 'shrink (default)', props: { ...props, defaultValue: true } },
            () => (
                <Flex gap="s" shrink={true}>
                    <ExampleLayoutChild content={<ExampleTiny />} />
                </Flex>
            ),
        ),
        // ResponsiveDemoItem
        createDemoItem({ title: 'responsive', props }, () => (
            <Flex shrink={RESPONSIVE_SHRINK}>
                <ExampleLayoutChild content={<ExampleTiny />} />
            </Flex>
        )),
    ],
});
