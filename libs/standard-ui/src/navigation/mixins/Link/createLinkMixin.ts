import { mergeProps, staticClassList } from '@noodlestan/context-ui-primitives';
import { createLinkMixin as createHeadlessLinkMixin } from '@noodlestan/headless-ui';

import { createFocusRingMixin } from '../../../focus';

import styles from './Link.module.scss';
import type { LinkMixinAPI } from './types';

export const createLinkMixin = (): LinkMixinAPI => {
    const { $root: $linkMixinRoot } = createHeadlessLinkMixin();
    const { $root: $focusRing } = createFocusRingMixin();

    const $localRoot = {
        classList: staticClassList(styles, `Link`),
    };

    return {
        $root: mergeProps($linkMixinRoot, $focusRing, $localRoot),
    };
};
