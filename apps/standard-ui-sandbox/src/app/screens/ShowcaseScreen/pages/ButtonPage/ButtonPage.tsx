import { staticClassList } from '@noodlestan/context-ui-primitives';
import { Button } from '@noodlestan/standard-ui';
import { type Component } from 'solid-js';

import { findComponent } from '../../../../../data';
import { ComponentMeta, DemoGroup, DemoItem, DemoPage } from '../../../../components';

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
                    <Button variant="primary" disabled>
                        Disabled
                    </Button>
                </DemoItem>
                <DemoItem row title="secondary">
                    <Button variant="secondary">Secondary</Button>
                    <Button variant="secondary" disabled>
                        Disabled
                    </Button>
                </DemoItem>
                <DemoItem row title="plain">
                    <Button variant="plain">Plain</Button>
                    <Button variant="plain" disabled>
                        Disabled
                    </Button>
                </DemoItem>
                <DemoItem row title="transparent">
                    <Button variant="transparent">Transparent</Button>
                    <Button variant="transparent" disabled>
                        Disabled
                    </Button>
                </DemoItem>
                <DemoItem row title="danger">
                    <Button variant="danger">Danger</Button>
                    <Button variant="danger" disabled>
                        Disabled
                    </Button>
                </DemoItem>
            </DemoGroup>
            <DemoGroup title="size">
                <DemoItem row title="large">
                    <Button variant="secondary" size="large">
                        Size L
                    </Button>
                </DemoItem>
                <DemoItem row title="medium">
                    <Button variant="secondary" size="medium">
                        Size M
                    </Button>
                </DemoItem>
                <DemoItem row title="normal">
                    <Button variant="secondary" size="normal">
                        Size S
                    </Button>
                </DemoItem>
                <DemoItem row title="small">
                    <Button variant="secondary" size="small">
                        Size XS
                    </Button>
                </DemoItem>
            </DemoGroup>
            <DemoGroup title="disabled">
                <DemoItem row title="">
                    <Button variant="secondary" disabled>
                        Disabled
                    </Button>
                </DemoItem>
            </DemoGroup>
            <DemoGroup title="onPress">
                <DemoItem row note="see console log">
                    <Button variant="secondary" onPress={handlePress}>
                        Foobar
                    </Button>
                </DemoItem>
            </DemoGroup>
            <DemoGroup title="classList">
                <DemoItem row note="Should override background color">
                    <Button variant="secondary" classList={{ override: true }}>
                        Foobar
                    </Button>
                </DemoItem>
            </DemoGroup>
        </DemoPage>
    );
};
