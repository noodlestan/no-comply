import { type ClassList } from '@noodlestan/context-ui-primitives';
import { Display, Flex } from '@noodlestan/standard-ui';
import type { ParentComponent } from 'solid-js';

import { PageContentsLayout } from '../../layouts';
import { $ID_SCREEN_TITLE } from '../../templates';

type DemoPageProps = {
    title: string;
    classList?: ClassList;
};

export const DemoPage: ParentComponent<DemoPageProps> = props => {
    return (
        <PageContentsLayout classList={props.classList}>
            <Display id={$ID_SCREEN_TITLE} level={2}>
                {props.title}
            </Display>
            <Flex gap="xl">{props.children}</Flex>
        </PageContentsLayout>
    );
};
