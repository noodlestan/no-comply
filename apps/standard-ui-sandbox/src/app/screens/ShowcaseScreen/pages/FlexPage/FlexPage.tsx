import { staticClassList } from '@noodlestan/context-ui-primitives';
import { Flex } from '@noodlestan/standard-ui';
import { type Component } from 'solid-js';

import { findComponent } from '../../../../../data';
import { ComponentMeta, DemoGroup, DemoItem, DemoPage } from '../../../../components';
import { ExampleLayoutContents } from '../../../../examples';

import styles from './FlexPage.module.css';

export const FlexPage: Component = () => {
    const COMPONENT = findComponent('Flex');

    return (
        <DemoPage title="Flex" classList={staticClassList(styles, 'FlexPage')}>
            <ComponentMeta component={COMPONENT} />
            <DemoGroup title="defaults">
                <DemoItem classList={staticClassList(styles, 'FlexPage--Item')}>
                    <Flex>
                        <ExampleLayoutContents />
                    </Flex>
                </DemoItem>
            </DemoGroup>
            <DemoGroup title="direction">
                <DemoItem title="row" classList={staticClassList(styles, 'FlexPage--Item')}>
                    <Flex direction="row">
                        <ExampleLayoutContents />
                    </Flex>
                </DemoItem>
                <DemoItem title="column" classList={staticClassList(styles, 'FlexPage--Item')}>
                    <Flex direction="column">
                        <ExampleLayoutContents />
                    </Flex>
                </DemoItem>
                <DemoItem title="row-reverse" classList={staticClassList(styles, 'FlexPage--Item')}>
                    <Flex direction="row-reverse">
                        <ExampleLayoutContents />
                    </Flex>
                </DemoItem>
                <DemoItem
                    title="column-reverse"
                    classList={staticClassList(styles, 'FlexPage--Item')}
                >
                    <Flex direction="column-reverse">
                        <ExampleLayoutContents />
                    </Flex>
                </DemoItem>
            </DemoGroup>
            <DemoGroup title="align">
                <DemoItem title="start" classList={staticClassList(styles, 'FlexPage--Item')}>
                    <Flex direction="row" align="start">
                        <ExampleLayoutContents />
                    </Flex>
                </DemoItem>
                <DemoItem title="center" classList={staticClassList(styles, 'FlexPage--Item')}>
                    <Flex direction="row" align="center">
                        <ExampleLayoutContents />
                    </Flex>
                </DemoItem>
                <DemoItem title="baseline" classList={staticClassList(styles, 'FlexPage--Item')}>
                    <Flex direction="row" align="baseline">
                        <ExampleLayoutContents />
                    </Flex>
                </DemoItem>
                <DemoItem title="end" classList={staticClassList(styles, 'FlexPage--Item')}>
                    <Flex direction="row" align="end">
                        <ExampleLayoutContents />
                    </Flex>
                </DemoItem>
                <DemoItem title="stretch" classList={staticClassList(styles, 'FlexPage--Item')}>
                    <Flex direction="row" align="stretch">
                        <ExampleLayoutContents />
                    </Flex>
                </DemoItem>
            </DemoGroup>
            <DemoGroup title="justify" classList={staticClassList(styles, 'FlexPage--JustifyDemo')}>
                <DemoItem title="start" classList={staticClassList(styles, 'FlexPage--Item')}>
                    <Flex direction="row" justify="start" stretch="width">
                        <ExampleLayoutContents />
                    </Flex>
                </DemoItem>
                <DemoItem title="center" classList={staticClassList(styles, 'FlexPage--Item')}>
                    <Flex direction="row" justify="center" stretch="width">
                        <ExampleLayoutContents />
                    </Flex>
                </DemoItem>
                <DemoItem title="end" classList={staticClassList(styles, 'FlexPage--Item')}>
                    <Flex direction="row" justify="end" stretch="width">
                        <ExampleLayoutContents />
                    </Flex>
                </DemoItem>
                <DemoItem title="around" classList={staticClassList(styles, 'FlexPage--Item')}>
                    <Flex direction="row" justify="around" stretch="width">
                        <ExampleLayoutContents />
                    </Flex>
                </DemoItem>
                <DemoItem title="between" classList={staticClassList(styles, 'FlexPage--Item')}>
                    <Flex direction="row" justify="between" stretch="width">
                        <ExampleLayoutContents />
                    </Flex>
                </DemoItem>
                <DemoItem title="stretch" classList={staticClassList(styles, 'FlexPage--Item')}>
                    <Flex direction="row" justify="stretch" stretch="width">
                        <ExampleLayoutContents />
                    </Flex>
                </DemoItem>
            </DemoGroup>
            <DemoGroup title="gap">
                <DemoItem title="none" classList={staticClassList(styles, 'FlexPage--Item')}>
                    <Flex direction="row" gap="none">
                        <ExampleLayoutContents />
                    </Flex>
                </DemoItem>
                <DemoItem title="s" classList={staticClassList(styles, 'FlexPage--Item')}>
                    <Flex direction="row" gap="s">
                        <ExampleLayoutContents />
                    </Flex>
                </DemoItem>
                <DemoItem title="m" classList={staticClassList(styles, 'FlexPage--Item')}>
                    <Flex direction="row" gap="m">
                        <ExampleLayoutContents />
                    </Flex>
                </DemoItem>
                <DemoItem title="l" classList={staticClassList(styles, 'FlexPage--Item')}>
                    <Flex direction="row" gap="l">
                        <ExampleLayoutContents />
                    </Flex>
                </DemoItem>
                <DemoItem title="xl" classList={staticClassList(styles, 'FlexPage--Item')}>
                    <Flex direction="row" gap="xl">
                        <ExampleLayoutContents />
                    </Flex>
                </DemoItem>
                <DemoItem title="2xl" classList={staticClassList(styles, 'FlexPage--Item')}>
                    <Flex direction="row" gap="2xl">
                        <ExampleLayoutContents />
                    </Flex>
                </DemoItem>
            </DemoGroup>

            <DemoGroup title="classList">
                <DemoItem note="Should override text color">
                    <Flex classList={staticClassList(styles, 'override')}>Foobar</Flex>
                </DemoItem>
            </DemoGroup>
        </DemoPage>
    );
};
