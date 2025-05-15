import { type ClassList } from '@noodlestan/context-ui-primitives';
import { Display, Flex } from '@noodlestan/standard-ui';
import type { ParentComponent } from 'solid-js';

import { PageContentsLayout } from '../../../layouts';
import { $ID_SCREEN_TITLE } from '../../constants';
import { PageMain } from '../../private';

type Props = {
    title: string;
    classList?: ClassList;
};

export const DemoPage: ParentComponent<Props> = props => {
    return (
        <PageMain labelledby={$ID_SCREEN_TITLE}>
            <PageContentsLayout classList={props.classList}>
                <Display id={$ID_SCREEN_TITLE} level={2}>
                    {props.title}
                </Display>
                <Flex gap="xl">{props.children}</Flex>
            </PageContentsLayout>
        </PageMain>
    );
};
