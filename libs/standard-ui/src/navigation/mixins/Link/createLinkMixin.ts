import { mergeProps, staticClassList } from '@noodlestan/context-ui-primitives';
import { createLinkMixin as createHeadlessLinkMixin } from '@noodlestan/headless-ui';

import { createFocusRing } from '../../../focus';

import styles from './Link.module.css';
import type { LinkMixinAPI } from './types';

export const createLinkMixin = (): LinkMixinAPI => {
    const { $root: $linkMixinRoot } = createHeadlessLinkMixin();
    const { $root: $focusRing } = createFocusRing();

    const $localRoot = {
        classList: staticClassList(styles, `Link`),
    };

    return {
        $root: mergeProps($linkMixinRoot, $focusRing, $localRoot),
    };
};
