import { staticClassList } from '@no-comply/solid-primitives';
import { Button, Popover } from '@no-comply/standard-ui';
import type { Component } from 'solid-js';

import { findComponent } from '../../../../../data';
import { ExamplePopoverContents } from '../../../../examples';
import { ComponentDemoPage, DemoItem, DemoSection } from '../../private';

import styles from './PopoverDemoPage.module.scss';

export const PopoverDemoPage: Component = () => {
    const COMPONENT = findComponent('Popover');

    return (
        <ComponentDemoPage
            component={COMPONENT}
            classList={staticClassList(styles, 'PopoverDemoPage')}
        >
            <DemoSection title="Demo">
                <DemoItem>
                    <Button id="trigger-id" popoverTarget="popover-id" popoverTargetAction="show">
                        Open popover
                    </Button>
                    <Popover id="popover-id">
                        <ExamplePopoverContents id="popover-id" />
                    </Popover>
                </DemoItem>
            </DemoSection>

            <DemoSection title="classList">
                <DemoItem row note="Should override background color">
                    {/* <Menu classList={staticClassList(styles, 'override')}>Foobar</Menu> */}
                </DemoItem>
            </DemoSection>
        </ComponentDemoPage>
    );
};
