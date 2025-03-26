import { IconButton } from '@noodlestan/context-ui';
import { PlusIcon } from 'lucide-solid';
import { type Component } from 'solid-js';

import { findComponent } from '../../../../../data';
import { ComponentMeta, DemoGroup, DemoItem, DemoPage } from '../../../../components';

import './IconButtonPage.css';

export const IconButtonPage: Component = () => {
    const handleClick = () => console.info('Click');
    const handleTap = () => console.info('Tap');

    const COMPONENT = findComponent('IconButton');

    return (
        <DemoPage classList={{ IconButtonPage: true }} title="IconButton">
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
            <DemoGroup title="onClick">
                <DemoItem row note="see console log">
                    <IconButton variant="secondary" icon={PlusIcon} onClick={handleClick} />
                </DemoItem>
            </DemoGroup>
            <DemoGroup title="onTap">
                <DemoItem row note="see console log">
                    <IconButton variant="secondary" icon={PlusIcon} onTap={handleTap} />
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
