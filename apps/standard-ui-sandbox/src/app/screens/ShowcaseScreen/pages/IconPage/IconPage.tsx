import { staticClassList } from '@noodlestan/context-ui-primitives';
import { Icon } from '@noodlestan/standard-ui';
import { ClockIcon } from 'lucide-solid';
import { type Component } from 'solid-js';

import { findComponent } from '../../../../../data';
import { ComponentMeta, DemoGroup, DemoItem, DemoPage } from '../../../../components';

import styles from './IconPage.module.css';

export const IconPage: Component = () => {
    const COMPONENT = findComponent('Icon');

    return (
        <DemoPage title="Icon" classList={staticClassList(styles, 'IconPage')}>
            <ComponentMeta component={COMPONENT} />
            <DemoGroup title="defaults">
                <DemoItem>
                    <Icon icon={ClockIcon} />
                </DemoItem>
            </DemoGroup>
            <DemoGroup title="size">
                <DemoItem title="large">
                    <Icon icon={ClockIcon} size="large" />
                </DemoItem>
                <DemoItem title="medium">
                    <Icon icon={ClockIcon} size="medium" />
                </DemoItem>
                <DemoItem title="normal">
                    <Icon icon={ClockIcon} size="normal" />
                </DemoItem>
                <DemoItem title="small">
                    <Icon icon={ClockIcon} size="small" />
                </DemoItem>
            </DemoGroup>
            <DemoGroup title="recoloring">
                <div class="IconPage--Recoloring">
                    <Icon icon={ClockIcon} />
                </div>
            </DemoGroup>
            <DemoGroup title="classList">
                <DemoItem note="Should override icon color">
                    <Icon icon={ClockIcon} classList={{ override: true }} />
                </DemoItem>
            </DemoGroup>
        </DemoPage>
    );
};
