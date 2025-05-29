import { staticClassList } from '@noodlestan/context-ui-primitives';
import { Icon } from '@noodlestan/standard-ui';
import { ClockIcon } from 'lucide-solid';
import { type Component } from 'solid-js';

import { findComponent } from '../../../../../data';
import { DemoGroup, DemoItem } from '../../../../components';
import { ComponentDemoPage } from '../../private';

import styles from './IconDemoPage.module.scss';

export const IconDemoPage: Component = () => {
    const COMPONENT = findComponent('Icon');

    return (
        <ComponentDemoPage
            component={COMPONENT}
            classList={staticClassList(styles, 'IconDemoPage')}
        >
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
                <div class="IconDemoPage--Recoloring">
                    <Icon icon={ClockIcon} />
                </div>
            </DemoGroup>

            <DemoGroup title="classList">
                <DemoItem note="Should override icon color">
                    <Icon icon={ClockIcon} classList={staticClassList(styles, 'override')} />
                </DemoItem>
            </DemoGroup>
        </ComponentDemoPage>
    );
};
