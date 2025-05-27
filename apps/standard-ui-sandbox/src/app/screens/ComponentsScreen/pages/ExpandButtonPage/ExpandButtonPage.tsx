import { createIconValue } from '@noodlestan/context-ui';
import { shortId, staticClassList } from '@noodlestan/context-ui-primitives';
import { ExpandButton } from '@noodlestan/standard-ui';
import { ChevronDownIcon, ChevronRightIcon } from 'lucide-solid';
import { type Component, createSignal } from 'solid-js';

import { findComponent } from '../../../../../data';
import { ComponentMeta, DemoGroup, DemoItem } from '../../../../components';
import { DemoPage } from '../../../../templates';

import styles from './ExpandButtonPage.module.css';

export const ExpandButtonPage: Component = () => {
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
        <DemoPage title="ExpandButton" classList={staticClassList(styles, 'ExpandButtonPage')}>
            <ComponentMeta component={COMPONENT} />
            <DemoGroup title="defaults">
                <DemoItem row>
                    <ExpandButton expanded={expanded()} {...props} />
                    <div id={id}>{expanded() ? 'expanded' : 'collapsed'}</div>
                </DemoItem>
            </DemoGroup>
            <DemoGroup title="size">
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
            </DemoGroup>
            <DemoGroup title="disabled">
                <DemoItem row title="">
                    <ExpandButton disabled expanded={expanded()} {...props} />
                </DemoItem>
            </DemoGroup>
            <DemoGroup title="classList">
                <DemoItem row note="Should override background color">
                    <ExpandButton
                        classList={staticClassList(styles, 'override')}
                        expanded={expanded()}
                        {...props}
                    />
                </DemoItem>
            </DemoGroup>
        </DemoPage>
    );
};
