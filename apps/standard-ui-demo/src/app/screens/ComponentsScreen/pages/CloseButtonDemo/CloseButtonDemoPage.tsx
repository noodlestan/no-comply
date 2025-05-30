import { staticClassList } from '@no-comply/solid-primitives';
import { CloseButton } from '@no-comply/standard-ui';
import { type Component } from 'solid-js';

import { findComponent } from '../../../../../data';
import { ComponentDemoPage, DemoItem, DemoSection } from '../../private';

import styles from './CloseButtonDemoPage.module.scss';

export const CloseButtonDemoPage: Component = () => {
    const handlePress = () => console.info('Click');

    const COMPONENT = findComponent('CloseButton');

    return (
        <ComponentDemoPage
            component={COMPONENT}
            classList={staticClassList(styles, 'CloseButtonDemoPage')}
        >
            <DemoSection title="defaults">
                <DemoItem row>
                    <CloseButton label="Close" />
                </DemoItem>
            </DemoSection>

            <DemoSection title="size">
                <DemoItem row title="medium">
                    <CloseButton size="medium" label="Close" />
                </DemoItem>
                <DemoItem row title="normal">
                    <CloseButton size="normal" label="Close" />
                </DemoItem>
                <DemoItem row title="small">
                    <CloseButton size="small" label="Close" />
                </DemoItem>
            </DemoSection>

            <DemoSection title="disabled">
                <DemoItem row title="">
                    <CloseButton disabled label="Close" />
                </DemoItem>
            </DemoSection>

            <DemoSection title="onPress">
                <DemoItem row note="see console log">
                    <CloseButton label="Close" onPress={handlePress} />
                </DemoItem>
            </DemoSection>

            <DemoSection title="classList">
                <DemoItem row note="Should override background color">
                    <CloseButton label="Close" classList={staticClassList(styles, 'override')} />
                </DemoItem>
            </DemoSection>
        </ComponentDemoPage>
    );
};
