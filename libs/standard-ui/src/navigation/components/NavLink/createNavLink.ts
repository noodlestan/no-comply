import {
	type NavLinkAPI,
	createFocusRing,
	createLink as createHeadlessLink,
	createNavLink as createHeadlessNavLink,
} from '@no-comply/solid-composables';
import { createExposable, exposeAPI } from '@no-comply/solid-contexts';
import { combineProps } from '@no-comply/solid-primitives';

import { createNavLinkMixin } from '../../mixins';

import { $NAV_LINK } from './constants';
import type { NavLinkProps } from './types';

export const createNavLink = (props: NavLinkProps): NavLinkAPI => {
	const [locals, expose, compose] = createExposable($NAV_LINK, props);

	const { $root: $linkRoot } = compose(createHeadlessLink(locals));
	const { $root: $focusRingRoot } = compose(createFocusRing());
	const { $root: $navLinkRoot } = compose(createHeadlessNavLink(locals));
	const { $root: $navLinkMixinRoot } = compose(createNavLinkMixin(locals));

	return exposeAPI(expose, '$root', {
		$root: combineProps($linkRoot, $focusRingRoot, $navLinkRoot, $navLinkMixinRoot),
	});
};
