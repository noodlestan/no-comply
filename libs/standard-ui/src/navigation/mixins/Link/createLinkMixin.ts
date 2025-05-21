import { mergeProps, staticClassList } from '@noodlestan/context-ui-primitives';
import { createLinkMixin as createHeadlessLinkMixin } from '@noodlestan/headless-ui';

import { createFocusRingMixin } from '../../../focus';

import styles from './Link.module.scss';
import type { LinkMixinAPI, LinkMixinProps } from './types';

export const createLinkMixin = (props: LinkMixinProps = {}): LinkMixinAPI => {
    const { $root: $linkMixinRoot } = createHeadlessLinkMixin();
    const { $root: $focusRing } = createFocusRingMixin(props);

    const $localRoot = {
        classList: staticClassList(styles, `Link`),
    };

    return {
        $root: mergeProps($linkMixinRoot, $focusRing, $localRoot),
    };
};
