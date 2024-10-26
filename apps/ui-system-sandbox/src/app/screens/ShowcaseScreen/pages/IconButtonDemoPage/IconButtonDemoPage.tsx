import { IconButton } from '@noodlestan/ui-system';
import { ApertureIcon } from 'lucide-solid';
import { Component, onCleanup } from 'solid-js';

import { DemoGroup, DemoItem, DemoPage } from '../../../../components';

export const IconButtonDemoPage: Component = () => {
    onCleanup(() => {});

    return (
        <DemoPage title="IconButton">
            <DemoGroup title="variant">
                <DemoItem title="primary" row>
                    <IconButton icon={ApertureIcon} variant="primary" />
                    <IconButton icon={ApertureIcon} variant="primary" selected />
                    <IconButton icon={ApertureIcon} variant="primary" disabled />
                </DemoItem>
                <DemoItem title="secondary" row>
                    <IconButton icon={ApertureIcon} variant="secondary" />
                    <IconButton icon={ApertureIcon} variant="secondary" selected />
                    <IconButton icon={ApertureIcon} variant="secondary" disabled />
                </DemoItem>
                <DemoItem title="plain" row>
                    <IconButton icon={ApertureIcon} variant="plain" />
                    <IconButton icon={ApertureIcon} variant="plain" selected />
                    <IconButton icon={ApertureIcon} variant="plain" disabled />
                </DemoItem>
                <DemoItem title="transparent" row>
                    <IconButton icon={ApertureIcon} variant="transparent" />
                    <IconButton icon={ApertureIcon} variant="transparent" selected />
                    <IconButton icon={ApertureIcon} variant="transparent" disabled />
                </DemoItem>
                <DemoItem title="danger" row>
                    <IconButton icon={ApertureIcon} variant="danger" />
                    <IconButton icon={ApertureIcon} variant="danger" selected />
                    <IconButton icon={ApertureIcon} variant="danger" disabled />
                </DemoItem>
            </DemoGroup>
            <DemoGroup title="size">
                <DemoItem title="xs" row>
                    <IconButton icon={ApertureIcon} size="xs" variant="primary" />
                    <IconButton icon={ApertureIcon} size="xs" variant="secondary" />
                    <IconButton icon={ApertureIcon} size="xs" variant="plain" />
                </DemoItem>
                <DemoItem title="s" row>
                    <IconButton icon={ApertureIcon} size="s" variant="primary" />
                    <IconButton icon={ApertureIcon} size="s" variant="secondary" />
                    <IconButton icon={ApertureIcon} size="s" variant="plain" />
                </DemoItem>
                <DemoItem title="m" row>
                    <IconButton icon={ApertureIcon} size="m" variant="primary" />
                    <IconButton icon={ApertureIcon} size="m" variant="secondary" />
                    <IconButton icon={ApertureIcon} size="m" variant="plain" />
                </DemoItem>
                <DemoItem title="l" row>
                    <IconButton icon={ApertureIcon} size="l" variant="primary" />
                    <IconButton icon={ApertureIcon} size="l" variant="secondary" />
                    <IconButton icon={ApertureIcon} size="l" variant="plain" />
                </DemoItem>
            </DemoGroup>
        </DemoPage>
    );
};
