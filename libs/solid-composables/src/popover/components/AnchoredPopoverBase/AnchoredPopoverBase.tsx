import { type ClosedTagProps, combineProps } from '@no-comply/solid-primitives';
import { type Component, splitProps } from 'solid-js';
import { Dynamic } from 'solid-js/web';

import { PopoverContextProvider } from '../../providers';

import { ANCHORED_POPOVER_BASE_PROPS } from './constants';
import { createAnchoredPopoverBase } from './createAnchoredPopoverBase';
import type { AnchoredPopoverBaseProps } from './types';

type Props = ClosedTagProps & AnchoredPopoverBaseProps;

export const AnchoredPopoverBase: Component<Props> = props => {
	const [locals, $others] = splitProps(props, [
		...ANCHORED_POPOVER_BASE_PROPS,
		'trigger',
		'children',
	]);

	const { $root, $trigger, $content, contextValue } = createAnchoredPopoverBase(locals);

	const $ = combineProps($others, $root);

	return (
		<PopoverContextProvider context={contextValue}>
			{locals.trigger($trigger)}
			<Dynamic {...$}>{locals.children($content)}</Dynamic>
		</PopoverContextProvider>
	);
};
