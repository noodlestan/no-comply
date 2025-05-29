import { staticClassList } from '@noodlestan/context-ui-primitives';
import { Flex, IconButton } from '@noodlestan/standard-ui';
import { CheckIcon, PlusIcon, TrashIcon } from 'lucide-solid';
import { type Component } from 'solid-js';

import { findComponent } from '../../../../../data';
import { DemoGroup, DemoItem } from '../../../../components';
import { ComponentDemoPage } from '../../private';

import styles from './IconButtonDemoPage.module.scss';

export const IconButtonDemoPage: Component = () => {
    const handlePress = () => console.info('Press');

    const COMPONENT = findComponent('IconButton');

    const $add = { icon: PlusIcon, label: 'Add an item' };
    const $check = { icon: CheckIcon, label: 'Add an item' };
    const $delete = { icon: TrashIcon, label: 'Delete item' };

    return (
        <ComponentDemoPage
            component={COMPONENT}
            classList={staticClassList(styles, 'IconButtonDemoPage')}
        >
            <DemoGroup title="defaults">
                <DemoItem row>
                    <IconButton {...$add} />
                </DemoItem>
            </DemoGroup>

            <DemoGroup title="variant">
                <DemoItem row title="primary" gap="m">
                    <IconButton {...$add} variant="primary" />
                    <IconButton {...$add} variant="primary" disabled />
                </DemoItem>
                <DemoItem row title="secondary" gap="m">
                    <IconButton {...$add} variant="secondary" />
                    <IconButton {...$add} variant="secondary" disabled />
                </DemoItem>
                <DemoItem row title="plain" gap="m">
                    <IconButton {...$add} variant="plain" />
                    <IconButton {...$add} variant="plain" disabled />
                </DemoItem>
            </DemoGroup>

            <DemoGroup title="intent">
                <DemoItem title="positive" gap="l">
                    <Flex direction="row" gap="l">
                        <IconButton {...$check} variant="primary" intent="positive" />
                        <IconButton {...$check} variant="primary" intent="positive" disabled />
                    </Flex>
                    <Flex direction="row" gap="l">
                        <IconButton {...$check} variant="secondary" intent="positive" />
                        <IconButton {...$check} variant="secondary" intent="positive" disabled />
                    </Flex>
                    <Flex direction="row" gap="l">
                        <IconButton {...$check} variant="plain" intent="positive" />
                        <IconButton {...$check} variant="plain" intent="positive" disabled />
                    </Flex>
                </DemoItem>
                <DemoItem title="negative" gap="l">
                    <Flex direction="row" gap="l">
                        <IconButton {...$delete} variant="primary" intent="negative" />
                        <IconButton {...$delete} variant="primary" intent="negative" disabled />
                    </Flex>
                    <Flex direction="row" gap="l">
                        <IconButton {...$delete} variant="secondary" intent="negative" />
                        <IconButton {...$delete} variant="secondary" intent="negative" disabled />
                    </Flex>
                    <Flex direction="row" gap="l">
                        <IconButton {...$delete} variant="plain" intent="negative" />
                        <IconButton {...$delete} variant="plain" intent="negative" disabled />
                    </Flex>
                </DemoItem>
                <DemoItem title="neutral" gap="l">
                    <Flex direction="row" gap="l">
                        <IconButton {...$add} variant="primary" intent="neutral" />
                        <IconButton {...$add} variant="primary" intent="neutral" disabled />
                    </Flex>
                    <Flex direction="row" gap="l">
                        <IconButton {...$add} variant="secondary" intent="neutral" />
                        <IconButton {...$add} variant="secondary" intent="neutral" disabled />
                    </Flex>
                    <Flex direction="row" gap="l">
                        <IconButton {...$add} variant="plain" intent="neutral" />
                        <IconButton {...$add} variant="plain" intent="neutral" disabled />
                    </Flex>
                </DemoItem>
            </DemoGroup>

            <DemoGroup title="size">
                <DemoItem row title="large">
                    <IconButton {...$add} size="large" />
                </DemoItem>
                <DemoItem row title="medium">
                    <IconButton {...$add} size="medium" />
                </DemoItem>
                <DemoItem row title="normal">
                    <IconButton {...$add} size="normal" />
                </DemoItem>
                <DemoItem row title="small">
                    <IconButton {...$add} size="small" />
                </DemoItem>
            </DemoGroup>

            <DemoGroup title="round">
                <DemoItem row title="large">
                    <IconButton {...$add} size="large" round />
                </DemoItem>
                <DemoItem row title="medium">
                    <IconButton {...$add} size="medium" round />
                </DemoItem>
                <DemoItem row title="normal">
                    <IconButton {...$add} size="normal" round />
                </DemoItem>
                <DemoItem row title="small">
                    <IconButton {...$add} size="small" round />
                </DemoItem>
            </DemoGroup>

            <DemoGroup title="disabled">
                <DemoItem row title="">
                    <IconButton {...$add} disabled />
                </DemoItem>
            </DemoGroup>

            <DemoGroup title="onPress">
                <DemoItem row note="see console log">
                    <IconButton {...$add} onPress={handlePress} />
                </DemoItem>
            </DemoGroup>

            <DemoGroup title="classList">
                <DemoItem row note="Should override background color">
                    <IconButton {...$add} classList={staticClassList(styles, 'override')} />
                </DemoItem>
            </DemoGroup>
        </ComponentDemoPage>
    );
};
