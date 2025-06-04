import type { AnchoredPopoverAPI } from '@no-comply/solid-composables';
import type { RenderProp } from '@no-comply/solid-primitives';
import { AnchoredPopover, Button } from '@no-comply/standard-ui';
import { type Component } from 'solid-js';

type ExamplePopoverContentsProps = {
    children: RenderProp<AnchoredPopoverAPI['$content']>;
};

export const ExampleMenuTrigger: Component<ExamplePopoverContentsProps> = props => {
    return (
        <AnchoredPopover
            direction="inline"
            trigger={trigger => (
                <Button variant="secondary" {...trigger}>
                    Options
                </Button>
            )}
        >
            {content => props.children(content)}
        </AnchoredPopover>
    );
};
