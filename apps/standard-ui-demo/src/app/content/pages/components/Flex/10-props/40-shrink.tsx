import { type BreakpointName, Flex, type FlexProps } from '@no-comply/standard-ui';

import { ExampleLayoutChild, ExampleTiny } from '../../../../examples';
import {
    createDocsItemData,
    createDocsResponsiveItemData,
    createDocsSectionData,
} from '../../../../types';
import { itemPropsSized as props } from '../constants';

const RESPONSIVE_SHRINK: FlexProps['shrink'] = {
    _: true,
    m: false,
    l: true,
};

const BPS = Object.keys(RESPONSIVE_SHRINK) as BreakpointName[];

export default createDocsSectionData({
    title: 'shrink',
    items: [
        createDocsItemData({ title: 'no shrink', props }, () => (
            <Flex gap="s" shrink={false}>
                <ExampleLayoutChild content={<ExampleTiny />} />
            </Flex>
        )),
        createDocsItemData(
            { title: 'shrink (default)', props: { ...props, defaultValue: true } },
            () => (
                <Flex gap="s" shrink={true}>
                    <ExampleLayoutChild content={<ExampleTiny />} />
                </Flex>
            ),
        ),
        createDocsResponsiveItemData(BPS, { title: 'responsive', props }, () => (
            <Flex shrink={RESPONSIVE_SHRINK}>
                <ExampleLayoutChild content={<ExampleTiny />} />
            </Flex>
        )),
    ],
});
