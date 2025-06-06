import type { ClassList } from '@no-comply/solid-primitives';

import type { ContentSize } from '../../../types';
import type { LinkMixinAPI, LinkMixinProps } from '../Link';

export type NavLinkMixinProps = LinkMixinProps & {
	layout?: NavLinkLayout;
	size?: ContentSize;
	nowrap?: boolean;
	highlight?: NavLinkHighlight;
};

type NavLinkLayout = 'h' | 'v';
type NavLinkHighlight = 'before' | 'after';

export type NavLinkMixinAPI = {
	$root: LinkMixinAPI['$root'] & {
		classList: ClassList;
	};
};
