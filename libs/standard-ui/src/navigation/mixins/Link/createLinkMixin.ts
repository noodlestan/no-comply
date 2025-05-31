import { createLinkMixin as createHeadlessLinkMixin } from '@no-comply/solid-composables';
import { combineProps, staticClassList } from '@no-comply/solid-primitives';

import { createFocusRingMixin } from '../../../focus';

import styles from './LinkMixin.module.scss';
import type { LinkMixinAPI, LinkMixinProps } from './types';

export const createLinkMixin = (props: LinkMixinProps = {}): LinkMixinAPI => {
    const { $root: $linkMixinRoot } = createHeadlessLinkMixin();
    const { $root: $focusRing } = createFocusRingMixin(props);

    const $root = {
        classList: staticClassList(styles, `Link`),
    };

    return {
        $root: combineProps($linkMixinRoot, $focusRing, $root),
    };
};
