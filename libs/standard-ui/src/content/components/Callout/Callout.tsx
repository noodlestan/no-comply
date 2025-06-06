import { type ClosedTagProps, combineProps } from '@no-comply/solid-primitives';
import { type Component, type JSX, splitProps } from 'solid-js';

import { ContentMessageTemplate } from '../../templates';

import { CALLOUT_PROPS } from './constants';
import { createCallout } from './createCallout';
import type { CalloutProps } from './types';

type Props = ClosedTagProps &
	CalloutProps & {
		children?: JSX.Element;
	};

export const Callout: Component<Props> = props => {
	const [locals, $others] = splitProps(props, [...CALLOUT_PROPS, 'children']);

	const { $root, _template, ...rest } = createCallout(locals);
	const $ = combineProps($root, $others);

	return (
		<ContentMessageTemplate $root={$} {..._template} {...rest}>
			{locals.children}
		</ContentMessageTemplate>
	);
};
