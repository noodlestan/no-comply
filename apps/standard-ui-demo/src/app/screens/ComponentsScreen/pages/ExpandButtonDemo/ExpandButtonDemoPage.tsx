import { createIconValue } from '@no-comply/solid-contexts';
import { shortId, staticClassList } from '@no-comply/solid-primitives';
import { ExpandButton } from '@no-comply/standard-ui';
import { ChevronDownIcon, ChevronRightIcon } from 'lucide-solid';
import { type Component, createSignal } from 'solid-js';

import { findComponent } from '../../../../../data';
import { ComponentDemoPage, DemoItem, DemoSection } from '../../private';

import styles from './ExpandButtonDemoPage.module.scss';

export const ExpandButtonDemoPage: Component = () => {
    const [expanded, setExpanded] = createSignal(false);

    const COMPONENT = findComponent('ExpandButton');

    const id = shortId();

    const toggleExpanded = () => setExpanded(v => !v);

    const props = {
        controls: id,
        labels: {
            expanded: 'Close section',
            collapsed: 'Show section',
        },
        icons: {
            expanded: createIconValue(ChevronDownIcon),
            collapsed: createIconValue(ChevronRightIcon),
        },
        onPress: toggleExpanded,
    };

    return (
        <ComponentDemoPage
            component={COMPONENT}
            classList={staticClassList(styles, 'ExpandButtonDemoPage')}
        >
            <DemoSection title="defaults">
                <DemoItem row align="center">
                    <ExpandButton expanded={expanded()} {...props} />
                    <label id={id}>{expanded() ? 'expanded' : 'collapsed'}</label>
                </DemoItem>
            </DemoSection>

            <DemoSection title="size">
                <DemoItem row title="large">
                    <ExpandButton size="large" expanded={expanded()} {...props} />
                </DemoItem>
                <DemoItem row title="medium">
                    <ExpandButton size="medium" expanded={expanded()} {...props} />
                </DemoItem>
                <DemoItem row title="normal">
                    <ExpandButton size="normal" expanded={expanded()} {...props} />
                </DemoItem>
                <DemoItem row title="small">
                    <ExpandButton size="small" expanded={expanded()} {...props} />
                </DemoItem>
            </DemoSection>

            <DemoSection title="disabled">
                <DemoItem row title="">
                    <ExpandButton disabled expanded={expanded()} {...props} />
                </DemoItem>
            </DemoSection>

            <DemoSection title="classList">
                <DemoItem row note="Should override background color">
                    <ExpandButton
                        classList={staticClassList(styles, 'override')}
                        expanded={expanded()}
                        {...props}
                    />
                </DemoItem>
            </DemoSection>
        </ComponentDemoPage>
    );
};
