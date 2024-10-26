import { Display, Flex, Surface } from '@noodlestan/ui-system';
import { Component, JSX } from 'solid-js';

import './DemoPage.css';

type DemoPageProps = {
    title: string;
    classList?: { [key: string]: boolean };
    children?: JSX.Element;
};

export const DemoPage: Component<DemoPageProps> = props => {
    return (
        <Surface classList={{ DemoPage: true, ...props.classList }} variant="page">
            <Flex padding="l" gap="m">
                <Display level={1}>{props.title}</Display>
                <Flex gap="xl">{props.children}</Flex>
            </Flex>
        </Surface>
    );
};
