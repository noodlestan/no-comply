import { AnchoredPopover, Button } from '@noodlestan/standard-ui';
import type { Component } from 'solid-js';

import { findComponent } from '../../../../../data';
import { ComponentMeta, DemoGroup, DemoItem } from '../../../../components';
import { ExamplePopoverContents } from '../../../../examples';
import { DemoPage } from '../../../../templates';

export const ComponentsPage: Component = () => {
    const COMPONENT = findComponent('AnchoredPopover');

    return (
        <DemoPage title="Components">
            <ComponentMeta component={COMPONENT} />
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
        </DemoPage>
    );
};
