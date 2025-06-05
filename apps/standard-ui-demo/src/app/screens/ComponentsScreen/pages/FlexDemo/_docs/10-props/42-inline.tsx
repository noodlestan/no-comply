import type { ResponsiveValue } from '@no-comply/solid-primitives';
import { type BreakpointName, Flex } from '@no-comply/standard-ui';

import { createDemoItem, createDemoSectionData } from '../../../../../../content';
import { ExampleLayoutChild } from '../../../../../../examples';
import { itemPropsBlock } from '../constants';

const RESPONSIVE_INLINE: ResponsiveValue<boolean, BreakpointName> = {
    _: true,
    m: false,
    l: true,
};
const props = { ...itemPropsBlock, bps: Object.keys(RESPONSIVE_INLINE) };

export default createDemoSectionData({
    title: 'inline',
    items: [
        createDemoItem({ title: 'inline', props }, () => (
            <>
                <Flex inline={false}>
                    <ExampleLayoutChild size="small" />
                </Flex>
                <Flex inline={false}>
                    <ExampleLayoutChild size="small" />
                </Flex>
            </>
        )),
        createDemoItem(
            { title: 'not inline (default)', props: { ...props, defaultValue: true } },
            () => (
                <>
                    <Flex inline={true}>
                        <ExampleLayoutChild size="small" />
                    </Flex>
                    <Flex inline={true}>
                        <ExampleLayoutChild size="small" />
                    </Flex>
                </>
            ),
        ),
        // ResponsiveDemoItem
        createDemoItem({ title: 'responsive', props }, () => (
            <>
                <Flex inline={RESPONSIVE_INLINE}>
                    <ExampleLayoutChild size="small" />
                </Flex>
                <Flex inline={RESPONSIVE_INLINE}>
                    <ExampleLayoutChild size="small" />
                </Flex>
            </>
        )),
    ],
});
