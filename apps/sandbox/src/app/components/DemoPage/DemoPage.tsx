import { type ClassList, Display, Flex, Surface } from '@noodlestan/context-ui';
import type { Component, JSX } from 'solid-js';

import './DemoPage.css';

type DemoPageProps = {
    title: string;
    classList?: ClassList;
    children?: JSX.Element;
};

export const DemoPage: Component<DemoPageProps> = props => {
    return (
        <Surface
            tag="main"
            variant="page"
            aria-labelledby="demo-page"
            classList={{ DemoPage: true, ...props.classList }}
        >
            <Flex padding="l" gap="m">
                <Display id="demo-page" level={1}>
                    {props.title}
                </Display>
                <Flex gap="xl">{props.children}</Flex>
            </Flex>
        </Surface>
    );
};
