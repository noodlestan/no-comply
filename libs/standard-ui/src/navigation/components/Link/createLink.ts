import { createFocusRing, createLink as createHeadlessLink } from '@no-comply/solid-composables';
import { createExposable, exposeAPI } from '@no-comply/solid-contexts';
import { combineProps } from '@no-comply/solid-primitives';

import { createLinkMixin } from '../../mixins';

import { $LINK } from './constants';
import type { LinkAPI, LinkProps } from './types';

export const createLink = (props: LinkProps): LinkAPI => {
    const [locals, expose, compose] = createExposable($LINK, props);

    const { $root: $linkRoot } = compose(createHeadlessLink(locals));
    const { $root: $focusRingRoot } = compose(createFocusRing());
    const { $root: $linkMixinRoot } = compose(createLinkMixin());

    return exposeAPI(expose, '$root', {
        $root: combineProps($linkRoot, $focusRingRoot, $linkMixinRoot),
    });
};
