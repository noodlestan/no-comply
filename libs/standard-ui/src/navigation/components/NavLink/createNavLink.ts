import { mergeProps } from '@noodlestan/context-ui-primitives';
import { type NavLinkAPI, createNavLink as createHeadlessNavLink } from '@noodlestan/headless-ui';

import { createNavLinkMixin } from '../../mixins';
import { createLink } from '../Link';

import type { NavLinkProps } from './types';

export const createNavLink = (props: NavLinkProps): NavLinkAPI => {
    const { $root: $linkRoot } = createLink(props);
    const { $root: $navLinkRoot } = createHeadlessNavLink(props);
    const { $root: $navLinkMixinRoot } = createNavLinkMixin(props);

    return {
        $root: mergeProps($linkRoot, $navLinkRoot, $navLinkMixinRoot),
    };
};
