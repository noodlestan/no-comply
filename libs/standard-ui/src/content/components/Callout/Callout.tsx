import { AlignFirstLine } from '@no-comply/solid-composables';
import { type ClosedTagProps, combineProps } from '@no-comply/solid-primitives';
import { type Component, type JSX, Show, splitProps } from 'solid-js';

import { CloseButton } from '../../../action';
import { Icon, type IconProps } from '../../../icon';
import { Flex } from '../../../layout';
import { Surface } from '../../../surface';
import { Display, Text } from '../../../typography';

import { CALLOUT_PROPS } from './constants';
import { createCallout } from './createCallout';
import type { CalloutProps } from './types';

type Props = ClosedTagProps &
	CalloutProps & {
		children?: JSX.Element;
	};

export const Callout: Component<Props> = props => {
	const [locals, $others] = splitProps(props, [...CALLOUT_PROPS, 'children']);

	const {
		$root,
		_displayTitle,
		_textDescription,
		_textBody,
		_icon,
		padding,
		gap,
		hasIcon,
		hasCloseButton,
		closeButtonSize,
	} = createCallout(locals);
	const $ = combineProps($root, $others);

	return (
		<Surface variant="message" {...$} aria-labelledby={_displayTitle.id}>
			<Flex direction="row" align="start" padding={padding()} gap={gap()} justify="between">
				<AlignFirstLine>
					<Flex direction="row" align="start" gap={gap()}>
						<Show when={hasIcon()}>
							<Icon {...(_icon as IconProps)} />
						</Show>
						<Flex gap={padding()}>
							<Display {..._displayTitle}>{locals.title}</Display>
							<Text tag="div" {..._textDescription}>
								{locals.summary}
							</Text>
							<Text tag="div" {..._textBody}>
								{locals.children}
							</Text>
						</Flex>
					</Flex>
					<Show when={hasCloseButton()}>
						<CloseButton label="Close" size={closeButtonSize()} alignFirstLine />
					</Show>
				</AlignFirstLine>
			</Flex>
		</Surface>
	);
};
