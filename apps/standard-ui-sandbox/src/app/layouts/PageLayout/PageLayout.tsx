import { staticClassList } from '@noodlestan/context-ui-types';
import { Flex } from '@noodlestan/standard-ui';
import type { ParentComponent } from 'solid-js';

import styles from './PageLayout.module.css';

export const PageLayout: ParentComponent = props => {
    return (
        <Flex direction="row" classList={staticClassList(styles, 'PageLayout')}>
            {props.children}
        </Flex>
    );
};
