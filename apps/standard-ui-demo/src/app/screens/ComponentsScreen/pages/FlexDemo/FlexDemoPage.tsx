import type { FlexAlign, FlexDirection, FlexJustify } from '@no-comply/solid-composables';
import { type ResponsiveValue } from '@no-comply/solid-primitives';
import { type BreakpointName, Flex, type LayoutPadding } from '@no-comply/standard-ui';
import { type Component } from 'solid-js';

import { findComponent } from '../../../../../data';
import { ExampleLayoutChild, ExampleTiny } from '../../../../examples';
import { ComponentDemoPage, DemoItem, DemoSection, ResponsiveDemoItem } from '../../private';

const RESPONSIVE_PADDING_1: ResponsiveValue<LayoutPadding, BreakpointName> = {
    _: 'xs',
    m: 'm',
    l: 'xl',
} as const;

const RESPONSIVE_DIRECTION: ResponsiveValue<FlexDirection, BreakpointName> = {
    _: 'column',
    m: 'row',
    l: 'column-reverse',
} as const;

const RESPONSIVE_ALIGN: ResponsiveValue<FlexAlign, BreakpointName> = {
    _: 'stretch',
    m: 'center',
    l: 'start',
} as const;

const RESPONSIVE_JUSTIFY: ResponsiveValue<FlexJustify, BreakpointName> = {
    _: 'start',
    m: 'between',
    l: 'center',
} as const;

const RESPONSIVE_SHRINK: ResponsiveValue<boolean, BreakpointName> = {
    _: true,
    m: false,
    l: true,
} as const;

const RESPONSIVE_WRAP: ResponsiveValue<boolean, BreakpointName> = {
    _: true,
    m: false,
    l: true,
} as const;

const THREE_BP = Object.keys(RESPONSIVE_PADDING_1);

export const FlexDemoPage: Component = () => {
    const COMPONENT = findComponent('Flex');

    return (
        <ComponentDemoPage component={COMPONENT}>
            <DemoSection title="defaults">
                <DemoItem styled>
                    <Flex>
                        <ExampleLayoutChild />
                        <ExampleLayoutChild />
                        <ExampleLayoutChild />
                    </Flex>
                </DemoItem>
            </DemoSection>

            <DemoSection title="gap">
                <DemoItem title="none" styled defaultValue>
                    <Flex padding="l" direction="row" gap="none">
                        <ExampleLayoutChild />
                        <ExampleLayoutChild />
                    </Flex>
                </DemoItem>
                <DemoItem title="s" styled>
                    <Flex padding="l" direction="row" gap="s">
                        <ExampleLayoutChild />
                        <ExampleLayoutChild />
                    </Flex>
                </DemoItem>
                <DemoItem title="m" styled>
                    <Flex padding="l" direction="row" gap="m">
                        <ExampleLayoutChild />
                        <ExampleLayoutChild />
                    </Flex>
                </DemoItem>
                <DemoItem title="l" styled>
                    <Flex padding="l" direction="row" gap="l">
                        <ExampleLayoutChild />
                        <ExampleLayoutChild />
                    </Flex>
                </DemoItem>
                <DemoItem title="xl" styled>
                    <Flex padding="l" direction="row" gap="xl">
                        <ExampleLayoutChild />
                        <ExampleLayoutChild />
                    </Flex>
                </DemoItem>
                <DemoItem title="2xl" styled>
                    <Flex padding="l" direction="row" gap="2xl">
                        <ExampleLayoutChild />
                        <ExampleLayoutChild />
                    </Flex>
                </DemoItem>

                <DemoItem title="shorthand ['s', 'xl']" styled>
                    <Flex padding="l" direction="row" gap={['s', 'xl']} wrap>
                        <ExampleLayoutChild style={{ 'min-width': '40%' }} />
                        <ExampleLayoutChild style={{ 'min-width': '40%' }} />
                        <ExampleLayoutChild style={{ 'min-width': '40%' }} />
                        <ExampleLayoutChild style={{ 'min-width': '40%' }} />
                    </Flex>
                </DemoItem>

                <ResponsiveDemoItem
                    title="responsive { _: 's', m: 'm', l: 'xl' }"
                    styled
                    bps={THREE_BP}
                >
                    <Flex padding="l" direction="row" gap={RESPONSIVE_PADDING_1}>
                        <ExampleLayoutChild />
                        <ExampleLayoutChild />
                    </Flex>
                </ResponsiveDemoItem>

                <ResponsiveDemoItem
                    title="responsive shorthand [{ _: 's', m: 'm' }, { l: 'm' }]"
                    styled
                    bps={THREE_BP}
                >
                    <Flex padding="l" direction="row" gap={[{ _: 's', m: 'm' }, { l: 'm' }]} wrap>
                        <ExampleLayoutChild style={{ 'min-width': '40%' }} />
                        <ExampleLayoutChild style={{ 'min-width': '40%' }} />
                        <ExampleLayoutChild style={{ 'min-width': '40%' }} />
                        <ExampleLayoutChild style={{ 'min-width': '40%' }} />
                    </Flex>
                </ResponsiveDemoItem>
            </DemoSection>

            <DemoSection title="rowGap">
                <DemoItem title="l" styled>
                    <Flex rowGap="l">
                        <ExampleLayoutChild />
                        <ExampleLayoutChild />
                    </Flex>
                </DemoItem>

                <ResponsiveDemoItem title="responsive" styled bps={THREE_BP}>
                    <Flex rowGap={RESPONSIVE_PADDING_1}>
                        <ExampleLayoutChild />
                        <ExampleLayoutChild />
                    </Flex>
                </ResponsiveDemoItem>
            </DemoSection>

            <DemoSection title="columnGap">
                <DemoItem title="l" styled>
                    <Flex direction="row" columnGap="l">
                        <ExampleLayoutChild />
                        <ExampleLayoutChild />
                    </Flex>
                </DemoItem>

                <ResponsiveDemoItem title="responsive" styled bps={THREE_BP}>
                    <Flex direction="row" columnGap={RESPONSIVE_PADDING_1}>
                        <ExampleLayoutChild />
                        <ExampleLayoutChild />
                    </Flex>
                </ResponsiveDemoItem>
            </DemoSection>

            <DemoSection title="direction">
                <DemoItem title="column" styled defaultValue>
                    <Flex padding="l" gap="m" direction="column">
                        <ExampleLayoutChild content="Item 1" />
                        <ExampleLayoutChild content="Item 2" />
                        <ExampleLayoutChild content="Item 3" />
                    </Flex>
                </DemoItem>
                <DemoItem title="row" styled>
                    <Flex padding="l" gap="m" direction="row">
                        <ExampleLayoutChild content="Item 1" />
                        <ExampleLayoutChild content="Item 2" />
                        <ExampleLayoutChild content="Item 3" />
                    </Flex>
                </DemoItem>
                <DemoItem title="row-reverse" styled>
                    <Flex padding="l" gap="m" direction="row-reverse">
                        <ExampleLayoutChild content="Item 1" />
                        <ExampleLayoutChild content="Item 2" />
                        <ExampleLayoutChild content="Item 3" />
                    </Flex>
                </DemoItem>
                <DemoItem title="column-reverse" styled>
                    <Flex padding="l" gap="m" direction="column-reverse">
                        <ExampleLayoutChild content="Item 1" />
                        <ExampleLayoutChild content="Item 2" />
                        <ExampleLayoutChild content="Item 3" />
                    </Flex>
                </DemoItem>

                <ResponsiveDemoItem title="responsive" styled bps={THREE_BP}>
                    <Flex direction={RESPONSIVE_DIRECTION}>
                        <ExampleLayoutChild content="Item 1" />
                        <ExampleLayoutChild content="Item 2" />
                    </Flex>
                </ResponsiveDemoItem>
            </DemoSection>

            <DemoSection title="align">
                <DemoItem title="stretch" styled defaultValue>
                    <Flex padding="l" gap="m" direction="row" align="stretch">
                        <ExampleLayoutChild
                            style={{ 'max-width': '100px' }}
                            content="Lorem ipsum dolor sit amet"
                        />
                        <ExampleLayoutChild style={{ 'padding-block': '35px' }} />
                        <ExampleLayoutChild />
                    </Flex>
                </DemoItem>
                <DemoItem title="start" styled>
                    <Flex padding="l" gap="m" direction="row" align="start">
                        <ExampleLayoutChild
                            style={{ padding: '5px', 'max-width': '100px' }}
                            content="Lorem ipsum dolor sit amet"
                        />
                        <ExampleLayoutChild style={{ 'padding-block': '35px' }} />
                        <ExampleLayoutChild />
                    </Flex>
                </DemoItem>
                <DemoItem title="center" styled>
                    <Flex padding="l" gap="m" direction="row" align="center">
                        <ExampleLayoutChild
                            style={{ padding: '5px', 'max-width': '100px' }}
                            content="Lorem ipsum dolor sit amet"
                        />
                        <ExampleLayoutChild style={{ 'padding-block': '35px' }} />
                        <ExampleLayoutChild />
                    </Flex>
                </DemoItem>
                <DemoItem title="baseline" styled>
                    <Flex padding="l" gap="m" direction="row" align="baseline">
                        <ExampleLayoutChild
                            style={{ padding: '5px', 'max-width': '100px' }}
                            content="Lorem ipsum dolor sit amet"
                        />
                        <ExampleLayoutChild style={{ 'padding-block': '35px' }} />
                        <ExampleLayoutChild />
                    </Flex>
                </DemoItem>
                <DemoItem title="end" styled>
                    <Flex padding="l" gap="m" direction="row" align="end">
                        <ExampleLayoutChild
                            style={{ padding: '5px', 'max-width': '100px' }}
                            content="Lorem ipsum dolor sit amet"
                        />
                        <ExampleLayoutChild style={{ 'padding-block': '35px' }} />
                        <ExampleLayoutChild />
                    </Flex>
                </DemoItem>

                <ResponsiveDemoItem title="responsive" styled bps={THREE_BP}>
                    <Flex padding="l" gap="m" direction="row" align={RESPONSIVE_ALIGN}>
                        <ExampleLayoutChild
                            style={{ padding: '5px', 'max-width': '100px' }}
                            content="Lorem ipsum dolor sit amet"
                        />
                        <ExampleLayoutChild style={{ 'padding-block': '35px' }} />
                        <ExampleLayoutChild />
                    </Flex>
                </ResponsiveDemoItem>
            </DemoSection>

            <DemoSection title="justify">
                <DemoItem title="start" styled defaultValue>
                    <Flex padding="l" gap="m" direction="row" justify="start" stretch="width">
                        <ExampleLayoutChild />
                        <ExampleLayoutChild />
                        <ExampleLayoutChild />
                    </Flex>
                </DemoItem>
                <DemoItem title="center" styled>
                    <Flex padding="l" gap="m" direction="row" justify="center" stretch="width">
                        <ExampleLayoutChild />
                        <ExampleLayoutChild />
                        <ExampleLayoutChild />
                    </Flex>
                </DemoItem>
                <DemoItem title="end" styled>
                    <Flex padding="l" gap="m" direction="row" justify="end" stretch="width">
                        <ExampleLayoutChild />
                        <ExampleLayoutChild />
                        <ExampleLayoutChild />
                    </Flex>
                </DemoItem>
                <DemoItem title="around" styled>
                    <Flex padding="l" gap="m" direction="row" justify="around" stretch="width">
                        <ExampleLayoutChild />
                        <ExampleLayoutChild />
                        <ExampleLayoutChild />
                    </Flex>
                </DemoItem>
                <DemoItem title="between" styled>
                    <Flex padding="l" gap="m" direction="row" justify="between" stretch="width">
                        <ExampleLayoutChild />
                        <ExampleLayoutChild />
                        <ExampleLayoutChild />
                    </Flex>
                </DemoItem>
                <ResponsiveDemoItem title="responsive" styled bps={THREE_BP}>
                    <Flex
                        padding="l"
                        gap="m"
                        direction="row"
                        justify={RESPONSIVE_JUSTIFY}
                        stretch="width"
                    >
                        <ExampleLayoutChild content="Item 1" />
                        <ExampleLayoutChild content="Item 2" />
                    </Flex>
                </ResponsiveDemoItem>
            </DemoSection>

            <DemoSection title="shrink">
                <DemoItem title="shrink (default)" row padding="l" styled width={'300px'}>
                    <Flex direction="row">
                        <ExampleLayoutChild content={<ExampleTiny />} />
                    </Flex>
                </DemoItem>
                <DemoItem title="no shrink" row padding="l" styled width={'300px'}>
                    <Flex direction="row" shrink={false}>
                        <ExampleLayoutChild content={<ExampleTiny />} />
                    </Flex>
                </DemoItem>
                <ResponsiveDemoItem
                    title="responsive"
                    row
                    padding="l"
                    styled
                    width={'300px'}
                    bps={THREE_BP}
                >
                    <Flex direction="row" shrink={RESPONSIVE_SHRINK}>
                        <ExampleLayoutChild content={<ExampleTiny />} />
                    </Flex>
                </ResponsiveDemoItem>
            </DemoSection>

            <DemoSection title="wrap">
                <DemoItem title="no wrap (default)" row padding="l" styled width={'300px'}>
                    <Flex direction="row">
                        <ExampleLayoutChild size="small" />
                        <ExampleLayoutChild size="small" />
                    </Flex>
                </DemoItem>
                <DemoItem title="wrap" row padding="l" styled width={'300px'}>
                    <Flex direction="row" wrap>
                        <ExampleLayoutChild size="small" />
                        <ExampleLayoutChild size="small" />
                    </Flex>
                </DemoItem>
                <ResponsiveDemoItem
                    title="responsive"
                    row
                    padding="l"
                    styled
                    width={'300px'}
                    bps={THREE_BP}
                >
                    <Flex direction="row" wrap={RESPONSIVE_WRAP}>
                        <ExampleLayoutChild />
                        <ExampleLayoutChild />
                    </Flex>
                </ResponsiveDemoItem>
            </DemoSection>

            <DemoSection title="inline">
                <DemoItem
                    title="not inline (default)"
                    row
                    padding="l"
                    styled
                    styles={{ display: 'block' }}
                >
                    <Flex direction="row">
                        <ExampleLayoutChild size="small" />
                    </Flex>
                    <Flex direction="row">
                        <ExampleLayoutChild size="small" />
                    </Flex>
                </DemoItem>
                <DemoItem title="inline" row padding="l" styled styles={{ display: 'block' }}>
                    <Flex direction="row" inline>
                        <ExampleLayoutChild size="small" />
                    </Flex>
                    <Flex direction="row" inline>
                        <ExampleLayoutChild size="small" />
                    </Flex>
                </DemoItem>
                <ResponsiveDemoItem
                    title="responsive"
                    row
                    padding="l"
                    styled
                    styles={{ display: 'block' }}
                    bps={THREE_BP}
                >
                    <Flex direction="row" inline={RESPONSIVE_WRAP}>
                        <ExampleLayoutChild size="small" />
                    </Flex>
                    <Flex direction="row" inline={RESPONSIVE_WRAP}>
                        <ExampleLayoutChild size="small" />
                    </Flex>
                </ResponsiveDemoItem>
            </DemoSection>
        </ComponentDemoPage>
    );
};
