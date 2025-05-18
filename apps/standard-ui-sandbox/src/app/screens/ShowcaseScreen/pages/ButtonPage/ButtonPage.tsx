import { staticClassList } from '@noodlestan/context-ui-primitives';
import { Button } from '@noodlestan/standard-ui';
import { type Component } from 'solid-js';

import { findComponent } from '../../../../../data';
import { ComponentMeta, DemoGroup, DemoItem } from '../../../../components';
import { DemoPage } from '../../../../templates';

import styles from './ButtonPage.module.css';

export const ButtonPage: Component = () => {
    const handlePress = () => console.info('Click');

    const COMPONENT = findComponent('Button');

    return (
        <DemoPage title="Button" classList={staticClassList(styles, 'ButtonPage')}>
            <ComponentMeta component={COMPONENT} />
            <DemoGroup title="defaults">
                <DemoItem row>
                    <Button>Foobar</Button>
                </DemoItem>
            </DemoGroup>
            <DemoGroup title="variant">
                <DemoItem row title="primary">
                    <Button variant="primary">Primary</Button>
                </DemoItem>
                <DemoItem row title="secondary">
                    <Button variant="secondary">Secondary</Button>
                </DemoItem>
                <DemoItem row title="plain">
                    <Button variant="plain">Plain</Button>
                </DemoItem>
            </DemoGroup>
            <DemoGroup title="intent">
                <DemoItem row title="positive">
                    <Button variant="primary" intent="positive">
                        Primary
                    </Button>
                    <Button variant="secondary" intent="positive">
                        Secondary
                    </Button>
                    <Button variant="plain" intent="positive">
                        Plain
                    </Button>
                    <Button variant="plain" intent="positive" disabled>
                        Disabled
                    </Button>
                </DemoItem>
                <DemoItem row title="negative">
                    <Button variant="primary" intent="negative">
                        Primary
                    </Button>
                    <Button variant="secondary" intent="negative">
                        Secondary
                    </Button>
                    <Button variant="plain" intent="negative">
                        Plain
                    </Button>
                    <Button variant="plain" intent="negative" disabled>
                        Disabled
                    </Button>
                </DemoItem>
                <DemoItem row title="neutral">
                    <Button variant="primary" intent="neutral">
                        Primary
                    </Button>
                    <Button variant="secondary" intent="neutral">
                        Secondary
                    </Button>
                    <Button variant="plain" intent="neutral">
                        Plain
                    </Button>
                    <Button variant="plain" intent="neutral" disabled>
                        Disabled
                    </Button>
                </DemoItem>
            </DemoGroup>
            <DemoGroup title="size">
                <DemoItem row title="large">
                    <Button size="large">Size Large</Button>
                </DemoItem>
                <DemoItem row title="medium">
                    <Button size="medium">Size Medium</Button>
                </DemoItem>
                <DemoItem row title="normal">
                    <Button size="normal">Size Normal</Button>
                </DemoItem>
                <DemoItem row title="small">
                    <Button size="small">Size Small</Button>
                </DemoItem>
            </DemoGroup>
            <DemoGroup title="disabled">
                <DemoItem row title="">
                    <Button disabled>Disabled</Button>
                </DemoItem>
            </DemoGroup>
            <DemoGroup title="onPress">
                <DemoItem row note="see console log">
                    <Button onPress={handlePress}>Foobar</Button>
                </DemoItem>
            </DemoGroup>
            <DemoGroup title="classList">
                <DemoItem row note="Should override background color">
                    <Button classList={staticClassList(styles, 'override')}>Foobar</Button>
                </DemoItem>
            </DemoGroup>
        </DemoPage>
    );
};
