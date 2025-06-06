import { type BreakpointName, Flex, type FlexProps } from '@no-comply/standard-ui';

import { ExampleLayoutChild } from '../../../../examples';
import {
    createDocsItemData,
    createDocsResponsiveItemData,
    createDocsSectionData,
} from '../../../../types';
import { itemProps as props } from '../constants';

const RESPONSIVE_ALIGN: FlexProps['align'] = {
    _: 'stretch',
    m: 'center',
    l: 'start',
};

const BPS = Object.keys(RESPONSIVE_ALIGN) as BreakpointName[];

export default createDocsSectionData({
    title: 'align',
    items: [
        createDocsItemData({ title: 'stretch', props }, () => (
            <Flex direction="row" gap="s" align="stretch">
                <ExampleLayoutChild
                    style={{ padding: '5px', 'max-width': '100px' }}
                    content="Lorem ipsum dolor sit amet"
                />
                <ExampleLayoutChild style={{ 'padding-block': '35px' }} />
                <ExampleLayoutChild />
            </Flex>
        )),
        createDocsItemData({ title: 'start', props: { ...props, defaultValue: true } }, () => (
            <Flex direction="row" gap="s" align="start">
                <ExampleLayoutChild
                    style={{ padding: '5px', 'max-width': '100px' }}
                    content="Lorem ipsum dolor sit amet"
                />
                <ExampleLayoutChild style={{ 'padding-block': '35px' }} />
                <ExampleLayoutChild />
            </Flex>
        )),
        createDocsItemData({ title: 'center', props }, () => (
            <Flex direction="row" gap="s" align="center">
                <ExampleLayoutChild
                    style={{ padding: '5px', 'max-width': '100px' }}
                    content="Lorem ipsum dolor sit amet"
                />
                <ExampleLayoutChild style={{ 'padding-block': '35px' }} />
                <ExampleLayoutChild />
            </Flex>
        )),
        createDocsItemData({ title: 'baseline', props }, () => (
            <Flex direction="row" gap="s" align="baseline">
                <ExampleLayoutChild
                    style={{ padding: '5px', 'max-width': '100px' }}
                    content="Lorem ipsum dolor sit amet"
                />
                <ExampleLayoutChild style={{ 'padding-block': '35px' }} />
                <ExampleLayoutChild />
            </Flex>
        )),
        createDocsItemData({ title: 'end', props }, () => (
            <Flex direction="row" gap="s" align="end">
                <ExampleLayoutChild
                    style={{ padding: '5px', 'max-width': '100px' }}
                    content="Lorem ipsum dolor sit amet"
                />
                <ExampleLayoutChild style={{ 'padding-block': '35px' }} />
                <ExampleLayoutChild />
            </Flex>
        )),
        createDocsResponsiveItemData(BPS, { title: 'responsive', props }, () => (
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
