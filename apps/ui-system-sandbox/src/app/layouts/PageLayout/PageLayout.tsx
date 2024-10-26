import { Flex } from '@noodlestan/ui-system';
import { Component, JSX } from 'solid-js';

import './PageLayout.css';

type PageLayoutProps = {
    children?: JSX.Element;
};

export const PageLayout: Component<PageLayoutProps> = props => {
    return (
        <Flex direction="row" classList={{ PageLayout: true }}>
            {props.children}
        </Flex>
    );
};
