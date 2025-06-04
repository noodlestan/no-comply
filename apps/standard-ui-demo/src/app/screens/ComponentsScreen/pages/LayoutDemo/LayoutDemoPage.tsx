import { Layout } from '@no-comply/standard-ui';
import { type Component } from 'solid-js';

import { findComponent } from '../../../../../data';
import { ExampleLayoutChild, ExampleMedium } from '../../../../examples';
import { ComponentDemoPage, DemoItem, DemoSection, ResponsiveDemoItem } from '../../private';

const RESPONSIVE_PADDING = { _: 'xs', m: 'm', l: 'xl' } as const;
const RESPONSIVE_STRETCH = { _: 'full', m: 'width', l: 'none' } as const;
const RESPONSIVE_OVERFLOW = { _: 'x-auto', m: 'hidden', l: 'y-auto' } as const;
const RESPONSIVE_CONTAINMENT = { _: true, m: false, l: true } as const;

const THREE_BP = Object.keys(RESPONSIVE_PADDING);

export const LayoutDemoPage: Component = () => {
    const COMPONENT = findComponent('Layout');

    const style = { display: 'flex', alignItems: 'start', height: '300px' };

    return (
        <ComponentDemoPage component={COMPONENT}>
            <DemoSection title="defaults">
                <DemoItem styled>
                    <Layout>
                        <ExampleLayoutChild />
                    </Layout>
                </DemoItem>
            </DemoSection>

            <DemoSection title="padding">
                <DemoItem styled title="none">
                    <Layout>
                        <ExampleLayoutChild />
                    </Layout>
                </DemoItem>
                <DemoItem title="s" styled>
                    <Layout padding="s">
                        <ExampleLayoutChild />
                    </Layout>
                </DemoItem>
                <DemoItem title="m" styled>
                    <Layout padding="m">
                        <ExampleLayoutChild />
                    </Layout>
                </DemoItem>
                <DemoItem title="l" styled>
                    <Layout padding="l">
                        <ExampleLayoutChild />
                    </Layout>
                </DemoItem>

                <DemoItem title="shorthand" styled>
                    <Layout padding={['s', 'm']}>
                        <ExampleLayoutChild />
                    </Layout>
                </DemoItem>

                <ResponsiveDemoItem title="responsive" styled bps={THREE_BP}>
                    <Layout padding={RESPONSIVE_PADDING}>
                        <ExampleLayoutChild />
                    </Layout>
                </ResponsiveDemoItem>
            </DemoSection>

            <DemoSection title="paddingBlock">
                <DemoItem title="l" styled>
                    <Layout paddingBlock="l">
                        <ExampleLayoutChild />
                    </Layout>
                </DemoItem>

                <ResponsiveDemoItem title="responsive" styled bps={THREE_BP}>
                    <Layout paddingBlock={RESPONSIVE_PADDING}>
                        <ExampleLayoutChild />
                    </Layout>
                </ResponsiveDemoItem>
            </DemoSection>

            <DemoSection title="paddingBlockStart">
                <DemoItem title="l" styled>
                    <Layout paddingBlockStart="l">
                        <ExampleLayoutChild />
                    </Layout>
                </DemoItem>

                <ResponsiveDemoItem title="responsive" styled bps={THREE_BP}>
                    <Layout paddingBlockStart={RESPONSIVE_PADDING}>
                        <ExampleLayoutChild />
                    </Layout>
                </ResponsiveDemoItem>
            </DemoSection>

            <DemoSection title="paddingBlockEnd">
                <DemoItem title="l" styled>
                    <Layout paddingBlockEnd="l">
                        <ExampleLayoutChild />
                    </Layout>
                </DemoItem>

                <ResponsiveDemoItem title="responsive" styled bps={THREE_BP}>
                    <Layout paddingBlockEnd={RESPONSIVE_PADDING}>
                        <ExampleLayoutChild />
                    </Layout>
                </ResponsiveDemoItem>
            </DemoSection>

            <DemoSection title="paddingInline">
                <DemoItem title="l" styled>
                    <Layout paddingInline="l">
                        <ExampleLayoutChild />
                    </Layout>
                </DemoItem>

                <ResponsiveDemoItem title="responsive" styled bps={THREE_BP}>
                    <Layout paddingInline={RESPONSIVE_PADDING}>
                        <ExampleLayoutChild />
                    </Layout>
                </ResponsiveDemoItem>
            </DemoSection>

            <DemoSection title="paddingInlineStart">
                <DemoItem title="l" styled>
                    <Layout paddingInlineStart="l">
                        <ExampleLayoutChild />
                    </Layout>
                </DemoItem>

                <ResponsiveDemoItem title="responsive" styled bps={THREE_BP}>
                    <Layout paddingInlineStart={RESPONSIVE_PADDING}>
                        <ExampleLayoutChild />
                    </Layout>
                </ResponsiveDemoItem>
            </DemoSection>

            <DemoSection title="paddingInlineEnd">
                <DemoItem title="l" styled>
                    <Layout paddingInlineEnd="l">
                        <ExampleLayoutChild />
                    </Layout>
                </DemoItem>

                <ResponsiveDemoItem title="responsive" styled bps={THREE_BP}>
                    <Layout paddingInlineEnd={RESPONSIVE_PADDING}>
                        <ExampleLayoutChild />
                    </Layout>
                </ResponsiveDemoItem>
            </DemoSection>

            <DemoSection title="stretch">
                <DemoItem title="no stretch" styled style={style}>
                    <Layout padding="l">
                        <ExampleLayoutChild style={{ height: '100%' }} />
                    </Layout>
                </DemoItem>
                <DemoItem title="width" styled style={style}>
                    <Layout padding="l" stretch="width">
                        <ExampleLayoutChild style={{ height: '100%' }} />
                    </Layout>
                </DemoItem>
                <DemoItem title="height" styled style={style}>
                    <Layout padding="l" stretch="height">
                        <ExampleLayoutChild style={{ height: '100%' }} />
                    </Layout>
                </DemoItem>
                <DemoItem title="full" styled style={style}>
                    <Layout padding="l" stretch="full">
                        <ExampleLayoutChild style={{ height: '100%' }} />
                    </Layout>
                </DemoItem>
                <ResponsiveDemoItem title="responsive" styled style={style} bps={THREE_BP}>
                    <Layout padding="l" stretch={RESPONSIVE_STRETCH}>
                        <ExampleLayoutChild style={{ height: '100%' }} />
                    </Layout>
                </ResponsiveDemoItem>
            </DemoSection>

            <DemoSection title="uncontained">
                <DemoItem title="contained (default)" styled>
                    <Layout padding="l">
                        <ExampleLayoutChild content={<ExampleMedium />} />
                    </Layout>
                </DemoItem>
                <DemoItem title="uncontained" styled>
                    <Layout padding="l" uncontained>
                        <ExampleLayoutChild content={<ExampleMedium />} />
                    </Layout>
                </DemoItem>
                <ResponsiveDemoItem title="responsive" styled bps={THREE_BP}>
                    <Layout padding="l" uncontained={RESPONSIVE_CONTAINMENT}>
                        <ExampleLayoutChild content={<ExampleMedium />} />
                    </Layout>
                </ResponsiveDemoItem>
            </DemoSection>

            <DemoSection title="overflow">
                <DemoItem title="auto" styled>
                    <Layout padding="l" overflow="auto" style={{ height: 'var(--scale-xl)' }}>
                        <ExampleLayoutChild content={<ExampleMedium />} style={{ width: '120%' }} />
                    </Layout>
                </DemoItem>
                <DemoItem title="x-auto" styled>
                    <Layout padding="l" overflow="x-auto" style={{ height: 'var(--scale-xl)' }}>
                        <ExampleLayoutChild content={<ExampleMedium />} style={{ width: '120%' }} />
                    </Layout>
                </DemoItem>
                <DemoItem title="y-auto" styled>
                    <Layout padding="l" overflow="y-auto" style={{ height: 'var(--scale-xl)' }}>
                        <ExampleLayoutChild content={<ExampleMedium />} style={{ width: '120%' }} />
                    </Layout>
                </DemoItem>
                <DemoItem title="hidden" styled>
                    <Layout padding="l" overflow="hidden" style={{ height: 'var(--scale-xl)' }}>
                        <ExampleLayoutChild content={<ExampleMedium />} style={{ width: '120%' }} />
                    </Layout>
                </DemoItem>
                <ResponsiveDemoItem
                    title="responsive"
                    height="var(--scale-xl)"
                    styled
                    bps={THREE_BP}
                >
                    <Layout padding="l" overflow={RESPONSIVE_OVERFLOW} style={{ height: '100px' }}>
                        <ExampleLayoutChild content={<ExampleMedium />} style={{ width: '120%' }} />
                    </Layout>
                </ResponsiveDemoItem>
            </DemoSection>
        </ComponentDemoPage>
    );
};
