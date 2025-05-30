import { staticClassList } from '@no-comply/solid-primitives';
import { Icon } from '@no-comply/standard-ui';
import { ClockIcon } from 'lucide-solid';
import { type Component } from 'solid-js';

import { findComponent } from '../../../../../data';
import { ComponentDemoPage, DemoItem, DemoSection } from '../../private';

import styles from './IconDemoPage.module.scss';

export const IconDemoPage: Component = () => {
    const COMPONENT = findComponent('Icon');

    return (
        <ComponentDemoPage
            component={COMPONENT}
            classList={staticClassList(styles, 'IconDemoPage')}
        >
            <DemoSection title="defaults">
                <DemoItem>
                    <Icon icon={ClockIcon} />
                </DemoItem>
            </DemoSection>

            <DemoSection title="size">
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
            </DemoSection>

            <DemoSection title="recoloring">
                <div class="IconDemoPage--Recoloring">
                    <Icon icon={ClockIcon} />
                </div>
            </DemoSection>

            <DemoSection title="classList">
                <DemoItem note="Should override icon color">
                    <Icon icon={ClockIcon} classList={staticClassList(styles, 'override')} />
                </DemoItem>
            </DemoSection>
        </ComponentDemoPage>
    );
};
