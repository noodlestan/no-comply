import {
    createClassList,
    createComputedProps,
    mergeProps,
} from '@noodlestan/context-ui-primitives';
import { createLinkMixin as createHeadlessLinkMixin } from '@noodlestan/headless-ui';

import styles from './SkipLink.module.scss';
import type { SkipLinkMixinAPI, SkipLinkMixinProps } from './types';

export const createSkipLinkMixin = (props: SkipLinkMixinProps = {}): SkipLinkMixinAPI => {
    const { $root: $linkMixinRoot } = createHeadlessLinkMixin();

    const classList = createClassList(styles, () => ({
        SkipLink: true,
        floating: Boolean(props.floating),
    }));
    const $localRoot = createComputedProps({
        classList,
    });

    return {
        $root: mergeProps($linkMixinRoot, $localRoot),
    };
};
