import { createFocusRing, createLink as createHeadlessLink } from '@no-comply/solid-composables';
import { combineProps } from '@no-comply/solid-primitives';

import { createLinkMixin } from '../../mixins';

import type { LinkAPI, LinkProps } from './types';

export const createLink = (props: LinkProps): LinkAPI => {
    const { $root: $linkRoot } = createHeadlessLink(props);
    const { $root: $focusRingRoot } = createFocusRing();
    const { $root: $linkMixinRoot } = createLinkMixin();

    return {
        $root: combineProps($focusRingRoot, $linkRoot, $linkMixinRoot),
    };
};
