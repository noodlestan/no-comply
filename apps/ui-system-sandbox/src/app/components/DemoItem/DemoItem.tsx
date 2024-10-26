import { Flex, Label, Surface, Text } from '@noodlestan/ui-system';
import { Component, JSX, Show } from 'solid-js';

import './DemoItem.css';

type DemoItemProps = {
    surface?: string;
    title?: string;
    note?: string;
    row?: boolean;
    maxWidth?: string;
    children?: JSX.Element;
};

export const DemoItem: Component<DemoItemProps> = props => {
    const style = () => (props.maxWidth ? { 'max-width': props.maxWidth } : {});

    const surface = () => props.surface || 'card';

    return (
        <Surface variant={surface()} classList={{ DemoItem: true }}>
            <div style={style()}>
                <Flex gap="m" padding="m">
                    <Show when={props.title}>
                        <Label>{props.title}</Label>
                    </Show>
                    <Flex gap="m" direction={props.row ? 'row' : 'column'}>
                        {props.children}
                    </Flex>
                    <Show when={props.note}>
                        <Text size="xs">{props.note}</Text>
                    </Show>
                </Flex>
            </div>
        </Surface>
    );
};
