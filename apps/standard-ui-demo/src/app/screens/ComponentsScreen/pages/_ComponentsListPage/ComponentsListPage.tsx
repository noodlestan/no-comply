import { AnchoredPopover, Button } from '@no-comply/standard-ui';
import type { Component } from 'solid-js';

import { DemoGroup, DemoItem } from '../../../../components';
import { ExamplePopoverContents } from '../../../../examples';
import { DemoPage } from '../../../../templates';

export const ComponentsListPage: Component = () => {
    return (
        <DemoPage title="Components">
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
        </DemoPage>
    );
};
