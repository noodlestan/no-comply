import { Show, splitProps } from 'solid-js';
import type { ParentComponent } from 'solid-js';

import { CloseButton } from '../../../actions';
import { Icon } from '../../../icon';
import { Flex } from '../../../layout';
import { Surface } from '../../../surface';
import { DisplayAligned, FirstLineAlign, Text } from '../../../typography';

import { createContentMessageTemplate } from './createContentMessageTemplate';
import type { ContentMessageTemplateProps } from './types';

type Props = ContentMessageTemplateProps;

export const ContentMessageTemplate: ParentComponent<Props> = props => {
    const [locals, templateProps] = splitProps(props, ['children']);

    const {
        $root,
        $title,
        $description,
        iconProps,
        alignmentHeight,
        padding,
        gap,
        titleVariant,
        descriptionVariant,
        hasCloseButton,
        closeButtonSize,
    } = createContentMessageTemplate(templateProps);

    return (
        <Surface variant="message" {...$root} aria-labelledby={$title.id}>
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
                    <Show when={hasCloseButton()}>
                        <CloseButton label="Close" size={closeButtonSize()} aligned />
                    </Show>
                </FirstLineAlign>
            </Flex>
        </Surface>
    );
};
