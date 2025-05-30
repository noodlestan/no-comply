import { type ClassList, shortId } from '@no-comply/solid-primitives';
import { Display, Flex } from '@no-comply/standard-ui';
import type { JSX, ParentComponent } from 'solid-js';

export type BaseSectionProps = {
    title: JSX.Element;
    classList?: ClassList;
    undertitle?: JSX.Element;
};

export const BaseSection: ParentComponent<BaseSectionProps> = props => {
    const labelId = shortId();

    return (
        <Flex tag="section" gap="xl" classList={props.classList} aria-labelledby={labelId}>
            <Flex gap="s">
                <Display level={3} id={labelId}>
                    {props.title}
                </Display>
                {props.undertitle}
            </Flex>
            <Flex gap="xl">{props.children}</Flex>
        </Flex>
    );
};
