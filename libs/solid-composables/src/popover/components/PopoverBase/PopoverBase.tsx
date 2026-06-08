import { type ClosedTagProps, combineProps } from '@no-comply/solid-primitives';
import { type ParentComponent, splitProps } from 'solid-js';
import { Dynamic } from 'solid-js/web';

import { POPOVER_PROPS } from '../../controllers';
import { PopoverContextProvider } from '../../providers';

import { createPopoverBase } from './createPopoverBase';
import type { PopoverBaseProps } from './types';

type Props = ClosedTagProps & PopoverBaseProps;

export const PopoverBase: ParentComponent<Props> = props => {
	const [locals, $others] = splitProps(props, [...POPOVER_PROPS, 'children']);

	const { $root, contextValue } = createPopoverBase(locals);

	const $ = combineProps($others, $root);

	return (
		<PopoverContextProvider context={contextValue}>
			<Dynamic component="div" {...$}>
				{locals.children}
			</Dynamic>
		</PopoverContextProvider>
	);
};
