import { staticClassList } from '@noodlestan/context-ui-primitives';
import { Divider, Flex, Label, Surface } from '@noodlestan/standard-ui';
import { type Component } from 'solid-js';

import { findComponent } from '../../../../../data';
import { ComponentMeta, DemoGroup, DemoItem } from '../../../../components';
import { DemoPage } from '../../../../templates';

import styles from './DividerPage.module.css';

const Dividers: Component = () => {
    return (
        <Flex gap="xl">
            <Label>default</Label>
            <Divider />
            <Label>alt</Label>
            <Divider variant="alt" />
            <Label>strong</Label>
            <Divider variant="strong" />
            <Label>muted</Label>
            <Divider variant="muted" />
        </Flex>
    );
};

export const DividerPage: Component = () => {
    const COMPONENT = findComponent('Divider');

    return (
        <DemoPage title="Divider" classList={staticClassList(styles, 'DividerPage')}>
            <ComponentMeta component={COMPONENT} />

            <DemoGroup title="defaults">
                <DemoItem title="stage" padding="l">
                    <Surface variant="stage" padding="l">
                        <Dividers />
                    </Surface>
                </DemoItem>
                <DemoItem title="page" padding="l">
                    <Surface variant="page" padding="l">
                        <Dividers />
                    </Surface>
                </DemoItem>
                <DemoItem title="card" padding="l">
                    <Surface variant="card" padding="l">
                        <Dividers />
                    </Surface>
                </DemoItem>
                <DemoItem title="message" padding="l">
                    <Surface variant="message" padding="l">
                        <Dividers />
                    </Surface>
                </DemoItem>
                <DemoItem title="inverse" padding="l">
                    <Surface variant="inverse" padding="l">
                        <Dividers />
                    </Surface>
                </DemoItem>
            </DemoGroup>

            <DemoGroup title="variant">
                <DemoItem title="base" padding="l">
                    <Divider variant="base" />
                </DemoItem>
                <DemoItem title="alt" padding="l">
                    <Divider variant="alt" />
                </DemoItem>
                <DemoItem title="strong" padding="l">
                    <Divider variant="strong" />
                </DemoItem>
                <DemoItem title="muted" padding="l">
                    <Divider variant="muted" />
                </DemoItem>
            </DemoGroup>

            <DemoGroup title="length">
                <DemoItem title="full" padding="m">
                    <Divider length={'full'} />
                </DemoItem>
                <DemoItem title="l" padding="m">
                    <Divider length={'l'} />
                </DemoItem>
                <DemoItem title="m" padding="m">
                    <Divider length={'m'} />
                </DemoItem>
                <DemoItem title="s" padding="m">
                    <Divider length={'s'} />
                </DemoItem>
                <DemoItem title="number (rem)" padding="m" note="7rem">
                    <Divider length={7} />
                </DemoItem>
            </DemoGroup>
        </DemoPage>
    );
};
