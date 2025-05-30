import { AnchoredPopover, Button } from '@no-comply/standard-ui';
import type { Component } from 'solid-js';

import { ExamplePopoverContents } from '../../../../examples';
import { BasePage } from '../../../../templates';
import { DemoItem, DemoSection } from '../../private';

export const ComponentsIndexPage: Component = () => {
    return (
        <BasePage title="Components">
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
        </BasePage>
    );
};
