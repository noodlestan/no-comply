import { createClassList, computedProps, mergeProps } from '@no-comply/solid-primitives';

import { createLinkMixin } from '../Link';

import styles from './SkipLinkMixin.module.scss';
import type { SkipLinkMixinAPI, SkipLinkMixinProps } from './types';

export const createSkipLinkMixin = (props: SkipLinkMixinProps = {}): SkipLinkMixinAPI => {
    const { $root: $linkMixinRoot } = createLinkMixin({ inset: true });

    const classList = createClassList(styles, () => ({
        SkipLink: true,
        floating: Boolean(props.floating),
    }));
    const $root = computedProps({
        classList,
    });

    return {
        $root: mergeProps($linkMixinRoot, $root),
    };
};
