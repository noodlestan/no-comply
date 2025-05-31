import { createFocusRing, createLink as createHeadlessLink } from '@no-comply/solid-composables';
import { createExposable, exposeAPI } from '@no-comply/solid-contexts';
import { combineProps } from '@no-comply/solid-primitives';

import { createSkipLinkMixin } from '../../mixins';

import { $SKIP_LINK } from './constants';
import type { SkipLinkAPI, SkipLinkProps } from './types';

export const createSkipLink = (props: SkipLinkProps): SkipLinkAPI => {
    const [locals, expose, compose] = createExposable($SKIP_LINK, props);

    const { $root: $linkRoot } = compose(createHeadlessLink(locals));
    const { $root: $focusRingRoot } = compose(createFocusRing());
    const { $root: $navLinkMixinRoot } = compose(createSkipLinkMixin());

    return exposeAPI(expose, '$root', {
        $root: combineProps($linkRoot, $focusRingRoot, $navLinkMixinRoot),
    });
};
