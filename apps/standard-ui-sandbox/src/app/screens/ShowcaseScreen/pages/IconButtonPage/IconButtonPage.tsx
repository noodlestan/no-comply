import { staticClassList } from '@noodlestan/context-ui-primitives';
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
                    <IconButton icon={PlusIcon} label="Add" />
                </DemoItem>
            </DemoGroup>
            <DemoGroup title="variant">
                <DemoItem row title="primary">
                    <IconButton variant="primary" icon={PlusIcon} label="Add" />
                    <IconButton variant="primary" icon={PlusIcon} label="Add" disabled />
                </DemoItem>
                <DemoItem row title="secondary">
                    <IconButton variant="secondary" icon={PlusIcon} label="Add" />
                    <IconButton variant="secondary" icon={PlusIcon} label="Add" disabled />
                </DemoItem>
                <DemoItem row title="plain">
                    <IconButton variant="plain" icon={PlusIcon} label="Add" />
                    <IconButton variant="plain" icon={PlusIcon} label="Add" disabled />
                </DemoItem>
                <DemoItem row title="transparent">
                    <IconButton variant="plain" icon={PlusIcon} label="Add" />
                    <IconButton variant="plain" icon={PlusIcon} label="Add" disabled />
                </DemoItem>
                <DemoItem row title="danger">
                    <IconButton variant="danger" icon={PlusIcon} label="Add" />
                    <IconButton variant="danger" icon={PlusIcon} label="Add" disabled />
                </DemoItem>
            </DemoGroup>
            <DemoGroup title="size">
                <DemoItem row title="large">
                    <IconButton variant="secondary" size="large" icon={PlusIcon} label="Add" />
                </DemoItem>
                <DemoItem row title="medium">
                    <IconButton variant="secondary" size="medium" icon={PlusIcon} label="Add" />
                </DemoItem>
                <DemoItem row title="normal">
                    <IconButton variant="secondary" size="normal" icon={PlusIcon} label="Add" />
                </DemoItem>
                <DemoItem row title="small">
                    <IconButton variant="secondary" size="small" icon={PlusIcon} label="Add" />
                </DemoItem>
            </DemoGroup>
            <DemoGroup title="disabled">
                <DemoItem row title="">
                    <IconButton variant="secondary" icon={PlusIcon} label="Add" disabled />
                </DemoItem>
            </DemoGroup>
            <DemoGroup title="onPress">
                <DemoItem row note="see console log">
                    <IconButton
                        variant="secondary"
                        icon={PlusIcon}
                        label="Add"
                        onPress={handlePress}
                    />
                </DemoItem>
            </DemoGroup>
            <DemoGroup title="classList">
                <DemoItem row note="Should override background color">
                    <IconButton
                        variant="secondary"
                        icon={PlusIcon}
                        label="Add"
                        classList={staticClassList(styles, 'override')}
                    />
                </DemoItem>
            </DemoGroup>
        </DemoPage>
    );
};
