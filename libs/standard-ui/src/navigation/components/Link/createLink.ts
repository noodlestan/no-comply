import { mergeProps } from '@noodlestan/context-ui-primitives';
import { createLink as createHeadlessLink } from '@noodlestan/headless-ui';

import { createLinkMixin } from '../../mixins/Link/createLinkMixin';

import type { LinkAPI, LinkProps } from './types';

export const createLink = (props: LinkProps): LinkAPI => {
    const { $root: $linkRoot } = createHeadlessLink(props);
    const { $root: $linkMixinRoot } = createLinkMixin();

    return {
        $root: mergeProps($linkRoot, $linkMixinRoot),
    };
};
