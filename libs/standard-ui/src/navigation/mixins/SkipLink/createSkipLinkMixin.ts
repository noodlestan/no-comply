import { mergeProps, staticClassList } from '@noodlestan/context-ui-primitives';
import { createLinkMixin as createHeadlessLinkMixin } from '@noodlestan/headless-ui';

import { createFocusRing } from '../../../focus';

import styles from './SkipLink.module.css';
import type { SkipLinkMixinAPI } from './types';

export const createSkipLinkMixin = (): SkipLinkMixinAPI => {
    const { $root: $linkMixinRoot } = createHeadlessLinkMixin();
    const { $root: $focusRing } = createFocusRing();

    const classList = staticClassList(styles, ['SkipLink']);
    const $localRoot = {
        classList,
    };

    return {
        $root: mergeProps($linkMixinRoot, $focusRing, $localRoot),
    };
};
