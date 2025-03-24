import { Button } from '@noodlestan/ui-system';
import { type Component } from 'solid-js';

import { findComponent } from '../../../../../data';
import { ComponentMeta, DemoGroup, DemoItem, DemoPage } from '../../../../components';

import './ButtonPage.css';

export const ButtonPage: Component = () => {
    const handleClick = () => console.info('Click');
    const handleTap = () => console.info('Tap');

    const COMPONENT = findComponent('Button');

    return (
        <DemoPage classList={{ ButtonPage: true }} title="Button">
            <ComponentMeta component={COMPONENT} />
            <DemoGroup title="defaults">
                <DemoItem row>
                    <Button>Foobar</Button>
                </DemoItem>
            </DemoGroup>
            <DemoGroup title="variant">
                <DemoItem row title="primary">
                    <Button variant="primary">Primary</Button>
                    <Button variant="primary" selected>
                        Selected
                    </Button>
                    <Button variant="primary" disabled>
                        Disabled
                    </Button>
                </DemoItem>
                <DemoItem row title="secondary">
                    <Button variant="secondary">Secondary</Button>
                    <Button variant="secondary" selected>
                        Selected
                    </Button>
                    <Button variant="secondary" disabled>
                        Disabled
                    </Button>
                </DemoItem>
                <DemoItem row title="plain">
                    <Button variant="plain">Plain</Button>
                    <Button variant="plain" selected>
                        Selected
                    </Button>
                    <Button variant="plain" disabled>
                        Disabled
                    </Button>
                </DemoItem>
                <DemoItem row title="transparent">
                    <Button variant="transparent">Transparent</Button>
                    <Button variant="transparent" selected>
                        Selected
                    </Button>
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
                <DemoItem row title="l">
                    <Button variant="secondary" size="l">
                        Size L
                    </Button>
                </DemoItem>
                <DemoItem row title="m">
                    <Button variant="secondary" size="m">
                        Size M
                    </Button>
                </DemoItem>
                <DemoItem row title="s">
                    <Button variant="secondary" size="s">
                        Size S
                    </Button>
                </DemoItem>
                <DemoItem row title="xs">
                    <Button variant="secondary" size="xs">
                        Size XS
                    </Button>
                </DemoItem>
            </DemoGroup>
            <DemoGroup title="length">
                <DemoItem row title="full">
                    <Button variant="secondary" length="full">
                        Length Full
                    </Button>
                </DemoItem>
                <DemoItem row title="l">
                    <Button variant="secondary" length="l">
                        Length L
                    </Button>
                </DemoItem>
                <DemoItem row title="m">
                    <Button variant="secondary" length="m">
                        Length M
                    </Button>
                </DemoItem>
                <DemoItem row title="s">
                    <Button variant="secondary" length="s">
                        Length S
                    </Button>
                </DemoItem>
                <DemoItem row title="(number)">
                    <Button variant="secondary" length={20}>
                        Length 20 (em)
                    </Button>
                </DemoItem>
            </DemoGroup>
            <DemoGroup title="selected">
                <DemoItem row title="">
                    <Button variant="secondary" selected>
                        Selected
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
            <DemoGroup title="onClick">
                <DemoItem row note="see console log">
                    <Button variant="secondary" onClick={handleClick}>
                        Foobar
                    </Button>
                </DemoItem>
            </DemoGroup>
            <DemoGroup title="onTap">
                <DemoItem row note="see console log">
                    <Button variant="secondary" onTap={handleTap}>
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
