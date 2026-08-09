import { type ClosedTagProps, combineProps } from '@no-comply/solid-primitives';
import { type ParentComponent, splitProps } from 'solid-js';
import { Dynamic } from 'solid-js/web';

import { ALIGN_FIRST_LINE_RESOLVER_PROPS } from './constants';
import { createAlignFirstLineResolver } from './createAlignFirstLineResolver';
import type { AlignFirstLineResolverProps } from './types';

type Props = ClosedTagProps & AlignFirstLineResolverProps;

export const AlignFirstLineResolver: ParentComponent<Props> = props => {
	const [locals, $others] = splitProps(props, ALIGN_FIRST_LINE_RESOLVER_PROPS);

	const { $root } = createAlignFirstLineResolver(locals);
	const $ = combineProps($others, $root);

	return <Dynamic {...$}>{props.children}</Dynamic>;
};
