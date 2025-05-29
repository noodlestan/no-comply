import { staticClassList } from '@noodlestan/context-ui-primitives';
import { Button, Popover } from '@noodlestan/standard-ui';
import type { Component } from 'solid-js';

import { findComponent } from '../../../../../data';
import { DemoGroup, DemoItem } from '../../../../components';
import { ExamplePopoverContents } from '../../../../examples';
import { ComponentDemoPage } from '../../private';

import styles from './PopoverDemoPage.module.scss';

export const PopoverDemoPage: Component = () => {
    const COMPONENT = findComponent('Popover');

    return (
        <ComponentDemoPage
            component={COMPONENT}
            classList={staticClassList(styles, 'PopoverDemoPage')}
        >
            <DemoGroup title="Demo">
                <DemoItem>
                    <Button id="trigger-id" popoverTarget="popover-id" popoverTargetAction="show">
                        Open popover
                    </Button>
                    <Popover id="popover-id">
                        <ExamplePopoverContents id="popover-id" />
                    </Popover>
                </DemoItem>
            </DemoGroup>

            <DemoGroup title="classList">
                <DemoItem row note="Should override background color">
                    {/* <Menu classList={staticClassList(styles, 'override')}>Foobar</Menu> */}
                </DemoItem>
            </DemoGroup>
        </ComponentDemoPage>
    );
};
