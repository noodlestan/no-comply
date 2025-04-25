import { type ClassList, shortId } from '@noodlestan/context-ui-primitives';
import { Display, Flex, Surface } from '@noodlestan/standard-ui';
import type { ParentComponent } from 'solid-js';

type DemoGroupProps = {
    title: string;
    classList?: ClassList;
};

export const DemoGroup: ParentComponent<DemoGroupProps> = props => {
    const labelId = shortId();

    return (
        <Surface variant="page" classList={props.classList} labelledby={labelId}>
            <Flex padding="s" gap="m">
                <Display level={3} id={labelId}>
                    {props.title}
                </Display>
                <Flex gap="s">{props.children}</Flex>
            </Flex>
        </Surface>
    );
};
