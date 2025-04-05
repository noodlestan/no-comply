import { staticClassList } from '@noodlestan/context-ui-types';
import { IconButton } from '@noodlestan/standard-ui';
import { PlusIcon } from 'lucide-solid';
import { type Component } from 'solid-js';

import { findComponent } from '../../../../../data';
import { ComponentMeta, DemoGroup, DemoItem, DemoPage } from '../../../../components';

import styles from './IconButtonPage.module.css';

export const IconButtonPage: Component = () => {
    const handlePress = () => console.info('Press');

    const COMPONENT = findComponent('IconButton');

    return (
        <DemoPage title="IconButton" classList={staticClassList(styles, 'IconButtonPage')}>
            <ComponentMeta component={COMPONENT} />
            <DemoGroup title="defaults">
                <DemoItem row>
                    <IconButton icon={PlusIcon} />
                </DemoItem>
            </DemoGroup>
            <DemoGroup title="variant">
                <DemoItem row title="primary">
                    <IconButton icon={PlusIcon} variant="primary" />
                    <IconButton icon={PlusIcon} variant="primary" disabled />
                </DemoItem>
                <DemoItem row title="secondary">
                    <IconButton icon={PlusIcon} variant="secondary" />
                    <IconButton icon={PlusIcon} variant="secondary" disabled />
                </DemoItem>
                <DemoItem row title="plain">
                    <IconButton icon={PlusIcon} variant="plain" />
                    <IconButton icon={PlusIcon} variant="plain" disabled />
                </DemoItem>
                <DemoItem row title="transparent">
                    <IconButton icon={PlusIcon} variant="plain" />
                    <IconButton icon={PlusIcon} variant="plain" disabled />
                </DemoItem>
                <DemoItem row title="danger">
                    <IconButton icon={PlusIcon} variant="danger" />
                    <IconButton icon={PlusIcon} variant="danger" disabled />
                </DemoItem>
            </DemoGroup>
            <DemoGroup title="size">
                <DemoItem row title="l">
                    <IconButton variant="secondary" icon={PlusIcon} size="l" />
                </DemoItem>
                <DemoItem row title="m">
                    <IconButton variant="secondary" icon={PlusIcon} size="m" />
                </DemoItem>
                <DemoItem row title="s">
                    <IconButton variant="secondary" icon={PlusIcon} size="s" />
                </DemoItem>
                <DemoItem row title="xs">
                    <IconButton variant="secondary" icon={PlusIcon} size="xs" />
                </DemoItem>
            </DemoGroup>
            <DemoGroup title="disabled">
                <DemoItem row title="">
                    <IconButton variant="secondary" icon={PlusIcon} disabled />
                </DemoItem>
            </DemoGroup>
            <DemoGroup title="onPress">
                <DemoItem row note="see console log">
                    <IconButton variant="secondary" icon={PlusIcon} onPress={handlePress} />
                </DemoItem>
            </DemoGroup>
            <DemoGroup title="classList">
                <DemoItem row note="Should override background color">
                    <IconButton
                        variant="secondary"
                        icon={PlusIcon}
                        classList={{ override: true }}
                    />
                </DemoItem>
            </DemoGroup>
        </DemoPage>
    );
};
