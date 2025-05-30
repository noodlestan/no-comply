import { staticClassList } from '@no-comply/solid-primitives';
import { AnchoredPopover, Button } from '@no-comply/standard-ui';
import type { Component } from 'solid-js';

import { findComponent } from '../../../../../data';
import { ExamplePopoverContents } from '../../../../examples';
import { ComponentDemoPage, DemoItem, DemoSection } from '../../private';

import styles from './AnchoredPopoverDemoPage.module.scss';

export const AnchoredPopoverDemoPage: Component = () => {
    const COMPONENT = findComponent('AnchoredPopover');

    return (
        <ComponentDemoPage
            component={COMPONENT}
            classList={staticClassList(styles, 'AnchoredPopoverDemoPage')}
        >
            <DemoSection title="Demo">
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
            </DemoSection>

            <DemoSection title="classList">
                <DemoItem row note="Should override background color">
                    {/* <Menu classList={staticClassList(styles, 'override')}>Foobar</Menu> */}
                </DemoItem>
            </DemoSection>
        </ComponentDemoPage>
    );
};
