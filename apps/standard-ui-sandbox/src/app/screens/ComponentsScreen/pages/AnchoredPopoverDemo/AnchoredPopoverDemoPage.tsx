import { staticClassList } from '@noodlestan/context-ui-primitives';
import { AnchoredPopover, Button } from '@noodlestan/standard-ui';
import type { Component } from 'solid-js';

import { findComponent } from '../../../../../data';
import { DemoGroup, DemoItem } from '../../../../components';
import { ExamplePopoverContents } from '../../../../examples';
import { ComponentDemoPage } from '../../private';

import styles from './AnchoredPopoverDemoPage.module.scss';

export const AnchoredPopoverDemoPage: Component = () => {
    const COMPONENT = findComponent('AnchoredPopover');

    return (
        <ComponentDemoPage
            component={COMPONENT}
            classList={staticClassList(styles, 'AnchoredPopoverDemoPage')}
        >
            <DemoGroup title="Demo">
                <DemoItem row>
                    <AnchoredPopover
                        anchor="start-end"
                        direction="inline"
                        flip="inline"
                        trigger={trigger => <Button {...trigger}>Open popover</Button>}
                    >
                        {popover => <ExamplePopoverContents id={popover.id} />}
                    </AnchoredPopover>
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
