import { staticClassList } from '@no-comply/solid-primitives';
import { Divider, Flex, Label, Surface } from '@no-comply/standard-ui';
import { type Component } from 'solid-js';

import { findComponent } from '../../../../../data';
import { ComponentDemoPage, DemoItem, DemoSection } from '../../private';

import styles from './DividerDemoPage.module.scss';

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

export const DividerDemoPage: Component = () => {
    const COMPONENT = findComponent('Divider');

    return (
        <ComponentDemoPage
            component={COMPONENT}
            classList={staticClassList(styles, 'DividerDemoPage')}
        >
            <DemoSection title="defaults">
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
            </DemoSection>

            <DemoSection title="variant">
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
            </DemoSection>

            <DemoSection title="length">
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
            </DemoSection>

            <DemoSection title="override">
                <DemoItem row note="Should override background color">
                    <Divider length={'full'} classList={staticClassList(styles, 'override')} />
                </DemoItem>
            </DemoSection>
        </ComponentDemoPage>
    );
};
