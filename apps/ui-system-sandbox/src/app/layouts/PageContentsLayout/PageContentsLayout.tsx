import { Flex, Surface } from '@noodlestan/ui-system';
import { Component, JSX } from 'solid-js';

import './PageContentsLayout.css';

type PageContentsLayoutProps = {
    variant: 'stage' | 'page';
    children?: JSX.Element;
};

export const PageContentsLayout: Component<PageContentsLayoutProps> = props => {
    return (
        <Surface variant={props.variant} classList={{ PageContentsLayout: true }}>
            <Flex direction="column">{props.children}</Flex>
        </Surface>
    );
};
