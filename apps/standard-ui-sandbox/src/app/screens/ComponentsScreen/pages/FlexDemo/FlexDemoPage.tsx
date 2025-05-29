import { staticClassList } from '@noodlestan/context-ui-primitives';
import { Flex } from '@noodlestan/standard-ui';
import { type Component } from 'solid-js';

import { findComponent } from '../../../../../data';
import { DemoGroup, DemoItem, ResponsiveRuler } from '../../../../components';
import { ExampleLayoutChild } from '../../../../examples';
import { ComponentDemoPage } from '../../private';

import styles from './FlexDemoPage.module.scss';

export const FlexDemoPage: Component = () => {
    const COMPONENT = findComponent('Flex');

    return (
        <ComponentDemoPage
            component={COMPONENT}
            classList={staticClassList(styles, 'FlexDemoPage')}
        >
            <DemoGroup title="defaults">
                <DemoItem styled>
                    <Flex>
                        <ExampleLayoutChild />
                        <ExampleLayoutChild />
                        <ExampleLayoutChild />
                    </Flex>
                </DemoItem>
            </DemoGroup>

            <DemoGroup title="gap">
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

                <DemoItem
                    title="responsive"
                    styled
                    slot={() => <ResponsiveRuler variants={{ _: 's', m: 'xl' }} />}
                >
                    <Flex padding="l" direction="row" gap={{ _: 's', m: 'xl' }}>
                        <ExampleLayoutChild />
                        <ExampleLayoutChild />
                    </Flex>
                </DemoItem>
            </DemoGroup>

            <DemoGroup title="direction">
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
            </DemoGroup>

            <DemoGroup title="align">
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
            </DemoGroup>

            <DemoGroup title="justify">
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
            </DemoGroup>

            <DemoGroup title="classList">
                <DemoItem note="Should override border" styled>
                    <Flex padding="l" classList={staticClassList(styles, 'override')}>
                        <ExampleLayoutChild />
                    </Flex>
                </DemoItem>
            </DemoGroup>
        </ComponentDemoPage>
    );
};
