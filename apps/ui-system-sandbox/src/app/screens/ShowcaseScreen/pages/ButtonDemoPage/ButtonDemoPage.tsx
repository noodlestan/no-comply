import { Button } from '@noodlestan/ui-system';
import { Component, onCleanup } from 'solid-js';

import { DemoGroup, DemoItem, DemoPage } from '../../../../components';

export const ButtonDemoPage: Component = () => {
    onCleanup(() => {});

    return (
        <DemoPage title="Button">
            <DemoGroup title="variant">
                <DemoItem title="primary" row>
                    <Button variant="primary">Primary</Button>
                    <Button variant="primary" selected>
                        Selected
                    </Button>
                    <Button variant="primary" disabled>
                        Disabled
                    </Button>
                </DemoItem>
                <DemoItem title="secondary" row>
                    <Button variant="secondary">Secondary</Button>
                    <Button variant="secondary" selected>
                        Selected
                    </Button>
                    <Button variant="secondary" disabled>
                        Disabled
                    </Button>
                </DemoItem>
                <DemoItem title="plain" row>
                    <Button variant="plain">Plain</Button>
                    <Button variant="plain" selected>
                        Selected
                    </Button>
                    <Button variant="plain" disabled>
                        Disabled
                    </Button>
                </DemoItem>
                <DemoItem title="transparent" row>
                    <Button variant="transparent">transparent</Button>
                    <Button variant="transparent" selected>
                        Selected
                    </Button>
                    <Button variant="transparent" disabled>
                        Disabled
                    </Button>
                </DemoItem>
                <DemoItem title="danger" row>
                    <Button variant="danger">danger</Button>
                    <Button variant="danger" selected>
                        Selected
                    </Button>
                    <Button variant="danger" disabled>
                        Disabled
                    </Button>
                </DemoItem>
            </DemoGroup>
            <DemoGroup title="size">
                <DemoItem title="xs" row>
                    <Button size="xs" variant="primary">
                        Primary
                    </Button>
                    <Button size="xs" variant="secondary">
                        Secondary
                    </Button>
                    <Button size="xs" variant="plain">
                        Plain
                    </Button>
                </DemoItem>
                <DemoItem title="s" row>
                    <Button size="s" variant="primary">
                        Primary
                    </Button>
                    <Button size="s" variant="secondary">
                        Secondary
                    </Button>
                    <Button size="s" variant="plain">
                        Plain
                    </Button>
                </DemoItem>
                <DemoItem title="m" row>
                    <Button size="m" variant="primary">
                        Primary
                    </Button>
                    <Button size="m" variant="secondary">
                        Secondary
                    </Button>
                    <Button size="m" variant="plain">
                        Plain
                    </Button>
                </DemoItem>
                <DemoItem title="l" row>
                    <Button size="l" variant="primary">
                        Primary
                    </Button>
                    <Button size="l" variant="secondary">
                        Secondary
                    </Button>
                    <Button size="l" variant="plain">
                        Plain
                    </Button>
                </DemoItem>
            </DemoGroup>
        </DemoPage>
    );
};
