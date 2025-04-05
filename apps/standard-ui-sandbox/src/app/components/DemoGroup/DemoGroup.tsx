import { type ClassList } from '@noodlestan/context-ui-types';
import { Display, Flex, Surface } from '@noodlestan/standard-ui';
import type { ParentComponent } from 'solid-js';

type DemoGroupProps = {
    title: string;
    classList?: ClassList;
};

export const DemoGroup: ParentComponent<DemoGroupProps> = props => {
    return (
        <Surface variant="page" classList={props.classList}>
            <Flex padding="s" gap="m">
                <Display level={3}>{props.title}</Display>
                <Flex gap="s">{props.children}</Flex>
            </Flex>
        </Surface>
    );
};
