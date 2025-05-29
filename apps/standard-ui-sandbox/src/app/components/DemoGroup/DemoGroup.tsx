import { type ClassList, shortId } from '@noodlestan/context-ui-primitives';
import { Display, Flex, Surface } from '@noodlestan/standard-ui';
import type { ParentComponent } from 'solid-js';

type Props = {
    title: string;
    classList?: ClassList;
};

export const DemoGroup: ParentComponent<Props> = props => {
    const labelId = shortId();

    return (
        <Surface variant="page" classList={props.classList} aria-labelledby={labelId}>
            <Flex gap="xl">
                <Display level={3} id={labelId}>
                    {props.title}
                </Display>
                <Flex gap="xl">{props.children}</Flex>
            </Flex>
        </Surface>
    );
};
