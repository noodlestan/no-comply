import { combineProps } from '@no-comply/solid-primitives';
import { Show, splitProps } from 'solid-js';
import type { ParentComponent } from 'solid-js';

import { CloseButton } from '../../../action';
import { Icon } from '../../../icon';
import { Flex } from '../../../layout';
import { Surface } from '../../../surface';
import { AlignFirstLine, DisplayAligned, Text } from '../../../typography';

import { CONTENT_MESSAGE_TEMPLATE_PROPS } from './constants';
import { createContentMessageTemplate } from './createContentMessageTemplate';
import type { ContentMessageTemplateProps } from './types';

type Props = ContentMessageTemplateProps;

export const ContentMessageTemplate: ParentComponent<Props> = props => {
	const [locals, $others] = splitProps(props, [...CONTENT_MESSAGE_TEMPLATE_PROPS, 'children']);

	const {
		$root,
		$title,
		$description,
		_icon,
		alignmentHeight,
		padding,
		gap,
		titleVariant,
		descriptionVariant,
		hasCloseButton,
		closeButtonSize,
	} = createContentMessageTemplate(locals);

	const $ = combineProps($root, $others);

	return (
		<Surface variant="message" {...$} aria-labelledby={$title.id}>
			<Flex direction="row" align="start" padding={padding()} gap={gap()} justify="between">
				<AlignFirstLine
					height={alignmentHeight()}
					type="display"
					level={4}
					variant={titleVariant()}
				>
					<Flex direction="row" align="start" gap={gap()}>
						<Icon {..._icon} aligned />
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
				</AlignFirstLine>
			</Flex>
		</Surface>
	);
};
