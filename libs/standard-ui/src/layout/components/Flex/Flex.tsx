import { type ClosedTagProps, combineProps } from '@no-comply/solid-primitives';
import { type ParentComponent, splitProps } from 'solid-js';
import { Dynamic } from 'solid-js/web';

import { FLEX_PROPS } from './constants';
import { createFlex } from './createFlex';
import type { FlexProps } from './types';

type Props = ClosedTagProps & FlexProps;

export const Flex: ParentComponent<Props> = props => {
	const [locals, $others] = splitProps(props, FLEX_PROPS);

	const { $root } = createFlex(locals);
	const $ = combineProps($others, $root);

	return <Dynamic {...$} />;
};
