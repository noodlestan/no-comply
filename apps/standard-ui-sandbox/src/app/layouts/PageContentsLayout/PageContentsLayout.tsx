import { staticClassList } from '@noodlestan/context-ui-types';
import { Flex, Surface } from '@noodlestan/standard-ui';
import type { ParentComponent } from 'solid-js';

import styles from './PageContentsLayout.module.css';

type PageContentsLayoutProps = {
    variant: 'stage' | 'page';
};

export const PageContentsLayout: ParentComponent<PageContentsLayoutProps> = props => {
    return (
        <Surface variant={props.variant} classList={staticClassList(styles, 'PageContentsLayout')}>
            <Flex direction="column">{props.children}</Flex>
        </Surface>
    );
};
