import { MenuContextProvider } from '@no-comply/solid-composables';
import { type ClosedTagProps, combineProps } from '@no-comply/solid-primitives';
import { type ParentComponent, Show, splitProps } from 'solid-js';
import { Dynamic } from 'solid-js/web';

import { Surface } from '../../../surface';

import { MENU_PROPS } from './constants';
import { createMenu } from './createMenu';
import type { MenuProps } from './types';

type Props = ClosedTagProps & MenuProps;

export const Menu: ParentComponent<Props> = props => {
	const [locals, $others] = splitProps(props, [...MENU_PROPS, 'children']);

	const { _surface, $label, contextValue } = createMenu(locals);
	const $ = combineProps($others, _surface);

	return (
		<MenuContextProvider context={contextValue}>
			<Surface {...$}>
				<Show when={$label.children}>
					<Dynamic {...$label} />
				</Show>
				{locals.children}
			</Surface>
		</MenuContextProvider>
	);
};
