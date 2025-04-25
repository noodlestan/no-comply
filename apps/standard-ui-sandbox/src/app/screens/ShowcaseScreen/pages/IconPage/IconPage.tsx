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
                <DemoItem title="l">
                    <Icon icon={ClockIcon} size="l" />
                </DemoItem>
                <DemoItem title="m">
                    <Icon icon={ClockIcon} size="m" />
                </DemoItem>
                <DemoItem title="s">
                    <Icon icon={ClockIcon} size="s" />
                </DemoItem>
            </DemoGroup>
            <DemoGroup title="recoloring">
                <div class="IconPage--Recoloring">
                    <Icon icon={ClockIcon} size="s" />
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
