import { FocusContextProvider } from '@no-comply/solid-contexts';
import { combineProps } from '@no-comply/solid-primitives';
import { type ParentComponent, splitProps } from 'solid-js';
import { Dynamic } from 'solid-js/web';

import { SEGMENTED_BUTTON_ITEM_PROPS } from './constants';
import { createSegmentedButtonItem } from './createSegmentedButtonItem';
import type { SegmentedButtonItemProps } from './types';
// import { Icon } from '../../../icon';

export const SegmentedButtonItem: ParentComponent<SegmentedButtonItemProps> = props => {
	const [locals, $others] = splitProps(props, [...SEGMENTED_BUTTON_ITEM_PROPS, 'children']);

	const { $root, $label, $radio, contextValue } = createSegmentedButtonItem(locals);

	const $ = combineProps($others, $root);

	return (
		<FocusContextProvider context={contextValue}>
			<Dynamic {...$}>
				<label {...$label}>{locals.children}</label>
				<input {...$radio} />
				{/* <Icon src={} /> */}
			</Dynamic>
		</FocusContextProvider>
	);
};
