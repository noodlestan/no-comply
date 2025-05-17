import { mergeProps } from '@noodlestan/context-ui-primitives';
import {
    type NavLinkAPI,
    createFocusRing,
    createLink as createHeadlessLink,
    createNavLink as createHeadlessNavLink,
} from '@noodlestan/headless-ui';

import { createNavLinkMixin } from '../../mixins';

import type { NavLinkProps } from './types';

export const createNavLink = (props: NavLinkProps): NavLinkAPI => {
    const { $root: $linkRoot } = createHeadlessLink(props);
    const { $root: $focusRingRoot } = createFocusRing();
    const { $root: $navLinkRoot } = createHeadlessNavLink(props);
    const { $root: $navLinkMixinRoot } = createNavLinkMixin(props);

    return {
        $root: mergeProps($linkRoot, $focusRingRoot, $navLinkRoot, $navLinkMixinRoot),
    };
};
