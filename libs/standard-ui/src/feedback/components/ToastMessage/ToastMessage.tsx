import { type ClosedTagProps, combineProps } from '@no-comply/solid-primitives';
import { type Component, type JSX, Show, splitProps } from 'solid-js';

import { CloseButton } from '../../../action';
import { Icon, type IconProps } from '../../../icon';
import { Flex } from '../../../layout';
import { Surface } from '../../../surface';
import { AlignFirstLine, DisplayAligned, Text } from '../../../typography';

import { TOASTMESSAGE_PROPS } from './constants';
import { createToastMessage } from './createToastMessage';
import type { ToastMessageProps } from './types';

type Props = ClosedTagProps &
	ToastMessageProps & {
		children?: JSX.Element;
	};

export const ToastMessage: Component<Props> = props => {
	const [locals, $others] = splitProps(props, [...TOASTMESSAGE_PROPS, 'children']);

	const {
		$root,
		$title,
		$description,
		$body,
		_icon,
		alignmentHeight,
		padding,
		gap,
		titleVariant,
		hasIcon,
		hasCloseButton,
		closeButtonSize,
	} = createToastMessage(locals);
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
						<Show when={hasIcon()}>
							<Icon {...(_icon as IconProps)} aligned />
						</Show>
						<Flex gap={padding()}>
							<DisplayAligned {...$title}>{locals.title}</DisplayAligned>
							<Text tag="div" {...$description}>
								{locals.summary}
							</Text>
							<Text tag="div" {...$body}>
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
