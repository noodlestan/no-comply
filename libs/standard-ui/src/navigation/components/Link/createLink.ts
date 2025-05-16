import { mergeProps } from '@noodlestan/context-ui-primitives';
import { createFocusRing, createLink as createHeadlessLink } from '@noodlestan/headless-ui';

import { createLinkMixin } from '../../mixins/Link/createLinkMixin';

import type { LinkAPI, LinkProps } from './types';

export const createLink = (props: LinkProps): LinkAPI => {
    const { $root: $linkRoot } = createHeadlessLink(props);
    const { $root: $focusRingRoot } = createFocusRing();
    const { $root: $linkMixinRoot } = createLinkMixin();

    return {
        $root: mergeProps($focusRingRoot, $linkRoot, $linkMixinRoot),
    };
};
