import { type ClosedTagProps, combineProps } from '@no-comply/solid-primitives';
import { type Component, type JSX, splitProps } from 'solid-js';

import { ContentMessageTemplate } from '../../../content';

import { MESSAGE_BOX_PROPS } from './constants';
import { createMessageBox } from './createMessageBox';
import type { MessageBoxProps } from './types';

type Props = ClosedTagProps &
	MessageBoxProps & {
		children?: JSX.Element;
	};

export const MessageBox: Component<Props> = props => {
	const [locals, $others] = splitProps(props, [...MESSAGE_BOX_PROPS, 'children']);

	const { $root, ...rest } = createMessageBox(locals);
	const $ = combineProps($root, $others);

	return (
		<ContentMessageTemplate $root={$} {...rest}>
			{locals.children}
		</ContentMessageTemplate>
	);
};
