import { staticClassList } from '@noodlestan/context-ui-primitives';
import { Flex } from '@noodlestan/standard-ui';
import { type Component } from 'solid-js';

import { findComponent } from '../../../../../data';
import { ComponentMeta, DemoGroup, DemoItem, DemoPage } from '../../../../components';
import { ExampleTinyContents } from '../../../../examples';

import styles from './FlexPage.module.css';

export const FlexPage: Component = () => {
    const COMPONENT = findComponent('Flex');

    return (
        <DemoPage title="Flex" classList={staticClassList(styles, 'FlexPage')}>
            <ComponentMeta component={COMPONENT} />
            <DemoGroup title="defaults">
                <DemoItem>
                    <Flex>
                        <ExampleTinyContents />
                    </Flex>
                </DemoItem>
            </DemoGroup>
            <DemoGroup title="direction">
                <DemoItem title="row">
                    <Flex direction="row">
                        <ExampleTinyContents />
                    </Flex>
                </DemoItem>
                <DemoItem title="column">
                    <Flex direction="column">
                        <ExampleTinyContents />
                    </Flex>
                </DemoItem>
                <DemoItem title="row-reverse">
                    <Flex direction="row-reverse">
                        <ExampleTinyContents />
                    </Flex>
                </DemoItem>
                <DemoItem title="column-reverse">
                    <Flex direction="column-reverse">
                        <ExampleTinyContents />
                    </Flex>
                </DemoItem>
            </DemoGroup>
            <DemoGroup title="align">
                <DemoItem title="start">
                    <Flex align="start">
                        <ExampleTinyContents />
                    </Flex>
                </DemoItem>
                <DemoItem title="center">
                    <Flex align="center">
                        <ExampleTinyContents />
                    </Flex>
                </DemoItem>
                <DemoItem title="baseline">
                    <Flex align="baseline">
                        <ExampleTinyContents />
                    </Flex>
                </DemoItem>
                <DemoItem title="end">
                    <Flex align="end">
                        <ExampleTinyContents />
                    </Flex>
                </DemoItem>
                <DemoItem title="stretch">
                    <Flex align="stretch">
                        <ExampleTinyContents />
                    </Flex>
                </DemoItem>
            </DemoGroup>
            <DemoGroup title="justify" classList={staticClassList(styles, 'FlexPage--JustifyDemo')}>
                <DemoItem title="start">
                    <Flex justify="start" stretch="width">
                        <ExampleTinyContents />
                    </Flex>
                </DemoItem>
                <DemoItem title="center">
                    <Flex justify="center" stretch="width">
                        <ExampleTinyContents />
                    </Flex>
                </DemoItem>
                <DemoItem title="end">
                    <Flex justify="end" stretch="width">
                        <ExampleTinyContents />
                    </Flex>
                </DemoItem>
                <DemoItem title="stretch">
                    <Flex justify="stretch" stretch="width">
                        <ExampleTinyContents />
                    </Flex>
                </DemoItem>
            </DemoGroup>
            <DemoGroup title="gap">
                <DemoItem title="none">
                    <Flex direction="row" gap="none">
                        <ExampleTinyContents />
                    </Flex>
                </DemoItem>
                <DemoItem title="s">
                    <Flex direction="row" gap="s">
                        <ExampleTinyContents />
                    </Flex>
                </DemoItem>
                <DemoItem title="m">
                    <Flex direction="row" gap="m">
                        <ExampleTinyContents />
                    </Flex>
                </DemoItem>
                <DemoItem title="l">
                    <Flex direction="row" gap="l">
                        <ExampleTinyContents />
                    </Flex>
                </DemoItem>
                <DemoItem title="xl">
                    <Flex direction="row" gap="xl">
                        <ExampleTinyContents />
                    </Flex>
                </DemoItem>
                <DemoItem title="2xl">
                    <Flex direction="row" gap="2xl">
                        <ExampleTinyContents />
                    </Flex>
                </DemoItem>
            </DemoGroup>
            <DemoGroup title="padding">
                <DemoItem title="none">
                    <Flex direction="row">
                        <ExampleTinyContents />
                    </Flex>
                </DemoItem>
                <DemoItem title="s">
                    <Flex direction="row" padding="s">
                        <ExampleTinyContents />
                    </Flex>
                </DemoItem>
                <DemoItem title="m">
                    <Flex direction="row" padding="m">
                        <ExampleTinyContents />
                    </Flex>
                </DemoItem>
                <DemoItem title="l">
                    <Flex direction="row" padding="l">
                        <ExampleTinyContents />
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
