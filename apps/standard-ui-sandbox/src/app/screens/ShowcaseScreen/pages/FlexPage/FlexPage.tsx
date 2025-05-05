import { staticClassList } from '@noodlestan/context-ui-primitives';
import { Flex } from '@noodlestan/standard-ui';
import { type Component } from 'solid-js';

import { findComponent } from '../../../../../data';
import { ComponentMeta, DemoGroup, DemoItem, DemoPage } from '../../../../components';
import { ExampleTiny } from '../../../../examples';

import styles from './FlexPage.module.css';

export const FlexPage: Component = () => {
    const COMPONENT = findComponent('Flex');

    return (
        <DemoPage title="Flex" classList={staticClassList(styles, 'FlexPage')}>
            <ComponentMeta component={COMPONENT} />
            <DemoGroup title="defaults">
                <DemoItem>
                    <Flex>
                        <ExampleTiny />
                    </Flex>
                </DemoItem>
            </DemoGroup>
            <DemoGroup title="direction">
                <DemoItem title="row">
                    <Flex direction="row">
                        <ExampleTiny />
                    </Flex>
                </DemoItem>
                <DemoItem title="column">
                    <Flex direction="column">
                        <ExampleTiny />
                    </Flex>
                </DemoItem>
                <DemoItem title="row-reverse">
                    <Flex direction="row-reverse">
                        <ExampleTiny />
                    </Flex>
                </DemoItem>
                <DemoItem title="column-reverse">
                    <Flex direction="column-reverse">
                        <ExampleTiny />
                    </Flex>
                </DemoItem>
            </DemoGroup>
            <DemoGroup title="align">
                <DemoItem title="start">
                    <Flex align="start">
                        <ExampleTiny />
                    </Flex>
                </DemoItem>
                <DemoItem title="center">
                    <Flex align="center">
                        <ExampleTiny />
                    </Flex>
                </DemoItem>
                <DemoItem title="baseline">
                    <Flex align="baseline">
                        <ExampleTiny />
                    </Flex>
                </DemoItem>
                <DemoItem title="end">
                    <Flex align="end">
                        <ExampleTiny />
                    </Flex>
                </DemoItem>
                <DemoItem title="stretch">
                    <Flex align="stretch">
                        <ExampleTiny />
                    </Flex>
                </DemoItem>
            </DemoGroup>
            <DemoGroup title="justify" classList={staticClassList(styles, 'FlexPage--JustifyDemo')}>
                <DemoItem title="start">
                    <Flex justify="start" stretch="width">
                        <ExampleTiny />
                    </Flex>
                </DemoItem>
                <DemoItem title="center">
                    <Flex justify="center" stretch="width">
                        <ExampleTiny />
                    </Flex>
                </DemoItem>
                <DemoItem title="end">
                    <Flex justify="end" stretch="width">
                        <ExampleTiny />
                    </Flex>
                </DemoItem>
                <DemoItem title="stretch">
                    <Flex justify="stretch" stretch="width">
                        <ExampleTiny />
                    </Flex>
                </DemoItem>
            </DemoGroup>
            <DemoGroup title="gap">
                <DemoItem title="none">
                    <Flex direction="row" gap="none">
                        <ExampleTiny />
                    </Flex>
                </DemoItem>
                <DemoItem title="s">
                    <Flex direction="row" gap="s">
                        <ExampleTiny />
                    </Flex>
                </DemoItem>
                <DemoItem title="m">
                    <Flex direction="row" gap="m">
                        <ExampleTiny />
                    </Flex>
                </DemoItem>
                <DemoItem title="l">
                    <Flex direction="row" gap="l">
                        <ExampleTiny />
                    </Flex>
                </DemoItem>
                <DemoItem title="xl">
                    <Flex direction="row" gap="xl">
                        <ExampleTiny />
                    </Flex>
                </DemoItem>
                <DemoItem title="2xl">
                    <Flex direction="row" gap="2xl">
                        <ExampleTiny />
                    </Flex>
                </DemoItem>
            </DemoGroup>
            <DemoGroup title="padding">
                <DemoItem title="none">
                    <Flex direction="row">
                        <ExampleTiny />
                    </Flex>
                </DemoItem>
                <DemoItem title="s">
                    <Flex direction="row" padding="s">
                        <ExampleTiny />
                    </Flex>
                </DemoItem>
                <DemoItem title="m">
                    <Flex direction="row" padding="m">
                        <ExampleTiny />
                    </Flex>
                </DemoItem>
                <DemoItem title="l">
                    <Flex direction="row" padding="l">
                        <ExampleTiny />
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
