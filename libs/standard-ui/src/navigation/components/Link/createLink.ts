import { createFocusRing, createLink as createHeadlessLink } from '@no-comply/solid-composables';
import { mergeProps } from '@no-comply/solid-primitives';

import { createLinkMixin } from '../../mixins';

import type { LinkAPI, LinkProps } from './types';

export const createLink = (props: LinkProps): LinkAPI => {
    const { $root: $linkRoot } = createHeadlessLink(props);
    const { $root: $focusRingRoot } = createFocusRing();
    const { $root: $linkMixinRoot } = createLinkMixin();

    return {
        $root: mergeProps($focusRingRoot, $linkRoot, $linkMixinRoot),
    };
};
