import { mergeProps, staticClassList } from '@noodlestan/context-ui-primitives';
import { createLinkMixin as createHeadlessLinkMixin } from '@noodlestan/headless-ui';

import { createFocusRingOffsetMixin } from '../../../focus';

import styles from './Link.module.scss';
import type { LinkMixinAPI } from './types';

export const createLinkMixin = (): LinkMixinAPI => {
    const { $root: $linkMixinRoot } = createHeadlessLinkMixin();
    const { $root: $focusRing } = createFocusRingOffsetMixin();

    const $localRoot = {
        classList: staticClassList(styles, `Link`),
    };

    return {
        $root: mergeProps($linkMixinRoot, $focusRing, $localRoot),
    };
};
