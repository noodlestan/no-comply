import { createFocusRing, createLink as createHeadlessLink } from '@no-comply/solid-composables';
import { combineProps } from '@no-comply/solid-primitives';

import { createSkipLinkMixin } from '../../mixins';

import type { SkipLinkAPI, SkipLinkProps } from './types';

export const createSkipLink = (props: SkipLinkProps): SkipLinkAPI => {
    const { $root: $linkRoot } = createHeadlessLink(props);
    const { $root: $focusRingRoot } = createFocusRing();
    const { $root: $navLinkMixinRoot } = createSkipLinkMixin();

    return {
        $root: combineProps($linkRoot, $focusRingRoot, $navLinkMixinRoot),
    };
};
