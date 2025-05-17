import { mergeProps } from '@noodlestan/context-ui-primitives';
import { createFocusRing, createLink as createHeadlessLink } from '@noodlestan/headless-ui';

import { createSkipLinkMixin } from '../../mixins';

import type { SkipLinkAPI, SkipLinkProps } from './types';

export const createSkipLink = (props: SkipLinkProps): SkipLinkAPI => {
    const { $root: $linkRoot } = createHeadlessLink(props);
    const { $root: $focusRingRoot } = createFocusRing();
    const { $root: $navLinkMixinRoot } = createSkipLinkMixin();

    return {
        $root: mergeProps($linkRoot, $focusRingRoot, $navLinkMixinRoot),
    };
};
