import { type ClassList, Display, Flex, Surface } from '@noodlestan/context-ui';
import type { Component, JSX } from 'solid-js';

import './DemoGroup.css';

type DemoGroupProps = {
    title: string;
    classList?: ClassList;
    children?: JSX.Element;
};

export const DemoGroup: Component<DemoGroupProps> = props => {
    return (
        <Surface variant="page" classList={{ DemoGroup: true, ...props.classList }}>
            <Flex padding="s" gap="m">
                <Display level={3}>{props.title}</Display>
                <Flex gap="s">{props.children}</Flex>
            </Flex>
        </Surface>
    );
};
