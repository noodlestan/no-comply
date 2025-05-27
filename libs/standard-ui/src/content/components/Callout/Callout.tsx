import { type ClosedTagProps, mergeProps } from '@noodlestan/context-ui-primitives';
import { type Component, type JSX, splitProps } from 'solid-js';

import { CloseButton } from '../../../actions';
import { Icon } from '../../../icon';
import { Flex } from '../../../layout';
import { Surface } from '../../../surface';
import { DisplayAligned, FirstLineAlign, Text } from '../../../typography';

import { CALLOUT_PROPS } from './constants';
import { createCallout } from './createCallout';
import type { CalloutProps } from './types';

type Props = ClosedTagProps &
    CalloutProps & {
        children: JSX.Element;
    };

export const Callout: Component<Props> = props => {
    const [locals, $others] = splitProps(props, [...CALLOUT_PROPS, 'children']);

    const {
        $root,
        iconProps,
        $title,
        $description,
        alignmentHeight,
        padding,
        gap,
        titleVariant,
        descriptionVariant,
        closeButtonSize,
    } = createCallout(locals);
    const $ = mergeProps($root, $others);

    return (
        <Surface variant="message" {...$} aria-labelledby={$title.id}>
            <Flex direction="row" align="start" padding={padding()} gap={gap()} justify="between">
                <FirstLineAlign
                    height={alignmentHeight()}
                    type="display"
                    level={4}
                    variant={titleVariant()}
                >
                    <Flex direction="row" align="start" gap={gap()}>
                        <Icon {...iconProps} aligned />
                        <Flex gap={padding()}>
                            <DisplayAligned {...$title} />
                            <Text tag="div" {...$description} variant={descriptionVariant()}>
                                {locals.children}
                            </Text>
                        </Flex>
                    </Flex>
                    <CloseButton label="Close" size={closeButtonSize()} aligned />
                </FirstLineAlign>
            </Flex>
        </Surface>
    );
};
