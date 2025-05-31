import { createLinkMixin as createHeadlessLinkMixin } from '@no-comply/solid-composables';
import { createExposable, exposeAPI } from '@no-comply/solid-contexts';
import { combineProps, staticClassList } from '@no-comply/solid-primitives';

import { createFocusRingMixin } from '../../../focus';

import styles from './LinkMixin.module.scss';
import { $LINK_MIXIN } from './constants';
import type { LinkMixinAPI, LinkMixinProps } from './types';

export const createLinkMixin = (props: LinkMixinProps = {}): LinkMixinAPI => {
    const [locals, expose, compose] = createExposable($LINK_MIXIN, props);

    const { $root: $linkMixinRoot } = compose(createHeadlessLinkMixin());
    const { $root: $focusRing } = compose(createFocusRingMixin(locals));

    const $root = {
        classList: staticClassList(styles, `Link`),
    };

    return exposeAPI(expose, '$root', {
        $root: combineProps($linkMixinRoot, $focusRing, $root),
    });
};
