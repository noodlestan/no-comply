import { mergeProps, staticClassList } from '@noodlestan/context-ui-primitives';
import { createLink as createHeadlessLink, createLinkMixin } from '@noodlestan/headless-ui';

import styles from './Link.module.css';
import type { LinkAPI, LinkProps } from './types';

export const createLink = (props: LinkProps): LinkAPI => {
    const { $root: $linkRoot } = createHeadlessLink(props);
    const { $root: $linkMixinRoot } = createLinkMixin();

    const $localRoot = {
        classList: staticClassList(styles, `Link`),
    };

    return {
        $root: mergeProps($linkMixinRoot, $linkRoot, $localRoot),
    };
};
