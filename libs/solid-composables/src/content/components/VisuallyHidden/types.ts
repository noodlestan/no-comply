import type { VisuallyHiddenRoleName, VisuallyHiddenTagName } from '@no-comply/solid-accessibility';

import type { VisuallyHiddenMixinAPI } from '../../mixins';

/**
 * Allows setting the role and tag of {@link mixin:VisuallyHidden} components.
 */
export type VisuallyHiddenProps = {
	/**
	 * @default div
	 */
	tag?: VisuallyHiddenTagName;
	/**
	 * Currently restricted to `status` only.
	 */
	role?: VisuallyHiddenRoleName;
};

/**
 * Composes {@link mixin:VisuallyHidden} CSS classes into a `$root` node.
 */
export type VisuallyHiddenAPI = Omit<VisuallyHiddenMixinAPI, '$root'> & {
	$root: VisuallyHiddenMixinAPI['$root'] & {
		component: VisuallyHiddenTagName;
		role: VisuallyHiddenRoleName | undefined;
	};
};
