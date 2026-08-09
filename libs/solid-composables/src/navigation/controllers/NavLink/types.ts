import type { AriaAttributes } from '@no-comply/solid-accessibility';
import type { DataAttributeBoolean } from '@no-comply/solid-primitives';

export type NavLinkProps = {
	href: string;
	exact?: boolean;
	current?: boolean;
	mode?: NavLinkMode;
};

export type NavLinkMode = 'page' | 'section';

export type NavLinkAPI = {
	$root: {
		'data-nav-link-current': DataAttributeBoolean;
		'aria-current': AriaAttributes['aria-current'];
	};
};
