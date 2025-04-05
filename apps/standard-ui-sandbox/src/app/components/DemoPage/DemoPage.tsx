import { type ClassList, createClassList } from '@noodlestan/context-ui-types';
import { Display, Flex, Surface } from '@noodlestan/standard-ui';
import type { ParentComponent } from 'solid-js';

import styles from './DemoPage.module.css';

type DemoPageProps = {
    title: string;
    classList?: ClassList;
};

export const DemoPage: ParentComponent<DemoPageProps> = props => {
    const classList = createClassList(styles, 'DemoGroup', () => props.classList);

    return (
        <Surface
            component="main"
            variant="page"
            aria-labelledby="demo-page"
            classList={classList()}
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
