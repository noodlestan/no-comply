import { type ClosedTagProps, combineProps } from '@no-comply/solid-primitives';
import ArrowDownIcon from 'lucide-solid/icons/arrow-down';
import { type ParentComponent, splitProps } from 'solid-js';

import { Icon } from '../../../icon';

import { SKIP_LINK_PROPS } from './constants';
import { createSkipLink } from './createSkipLink';
import type { SkipLinkProps } from './types';

type Props = ClosedTagProps & SkipLinkProps;

export const SkipLink: ParentComponent<Props> = props => {
	const [locals, $others] = splitProps(props, [...SKIP_LINK_PROPS, 'children']);

	const { $root } = createSkipLink(locals);
	const $ = combineProps($others, $root);

	return (
		<a {...$}>
			<Icon size={locals.size} icon={ArrowDownIcon} aria-hidden={true} />
			{locals.children}
		</a>
	);
};
