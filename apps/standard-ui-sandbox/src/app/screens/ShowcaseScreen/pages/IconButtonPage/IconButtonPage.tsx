import { staticClassList } from '@noodlestan/context-ui-primitives';
import { IconButton } from '@noodlestan/standard-ui';
import { PlusIcon } from 'lucide-solid';
import { type Component } from 'solid-js';

import { findComponent } from '../../../../../data';
import { ComponentMeta, DemoGroup, DemoItem } from '../../../../components';
import { DemoPage } from '../../../../templates';

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
                </DemoItem>
                <DemoItem row title="secondary">
                    <IconButton variant="secondary" icon={PlusIcon} label="Add" />
                </DemoItem>
                <DemoItem row title="plain">
                    <IconButton variant="plain" icon={PlusIcon} label="Add" />
                </DemoItem>
            </DemoGroup>
            <DemoGroup title="intent">
                <DemoItem row title="positive">
                    <IconButton variant="primary" intent="positive" icon={PlusIcon} label="Add" />
                    <IconButton variant="secondary" intent="positive" icon={PlusIcon} label="Add" />
                    <IconButton variant="plain" intent="positive" icon={PlusIcon} label="Add" />
                    <IconButton
                        variant="plain"
                        intent="positive"
                        icon={PlusIcon}
                        label="Add"
                        disabled
                    />
                </DemoItem>
                <DemoItem row title="negative">
                    <IconButton variant="primary" intent="negative" icon={PlusIcon} label="Add" />
                    <IconButton variant="secondary" intent="negative" icon={PlusIcon} label="Add" />
                    <IconButton variant="plain" intent="negative" icon={PlusIcon} label="Add" />
                    <IconButton
                        variant="plain"
                        intent="negative"
                        icon={PlusIcon}
                        label="Add"
                        disabled
                    />
                </DemoItem>
                <DemoItem row title="neutral">
                    <IconButton variant="primary" intent="neutral" icon={PlusIcon} label="Add" />
                    <IconButton variant="secondary" intent="neutral" icon={PlusIcon} label="Add" />
                    <IconButton variant="plain" intent="neutral" icon={PlusIcon} label="Add" />
                    <IconButton
                        variant="plain"
                        intent="neutral"
                        icon={PlusIcon}
                        label="Add"
                        disabled
                    />
                </DemoItem>
            </DemoGroup>
            <DemoGroup title="size">
                <DemoItem row title="large">
                    <IconButton size="large" icon={PlusIcon} label="Add" />
                </DemoItem>
                <DemoItem row title="medium">
                    <IconButton size="medium" icon={PlusIcon} label="Add" />
                </DemoItem>
                <DemoItem row title="normal">
                    <IconButton size="normal" icon={PlusIcon} label="Add" />
                </DemoItem>
                <DemoItem row title="small">
                    <IconButton size="small" icon={PlusIcon} label="Add" />
                </DemoItem>
            </DemoGroup>
            <DemoGroup title="disabled">
                <DemoItem row title="">
                    <IconButton icon={PlusIcon} label="Add" disabled />
                </DemoItem>
            </DemoGroup>
            <DemoGroup title="onPress">
                <DemoItem row note="see console log">
                    <IconButton icon={PlusIcon} label="Add" onPress={handlePress} />
                </DemoItem>
            </DemoGroup>
            <DemoGroup title="classList">
                <DemoItem row note="Should override background color">
                    <IconButton
                        icon={PlusIcon}
                        label="Add"
                        classList={staticClassList(styles, 'override')}
                    />
                </DemoItem>
            </DemoGroup>
        </DemoPage>
    );
};
