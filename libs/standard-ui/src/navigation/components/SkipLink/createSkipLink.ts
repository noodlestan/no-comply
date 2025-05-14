import { mergeProps } from '@noodlestan/context-ui-primitives';

import { createSkipLinkMixin } from '../../mixins';
import { createLink } from '../Link';

import type { SkipLinkAPI, SkipLinkProps } from './types';

export const createSkipLink = (props: SkipLinkProps): SkipLinkAPI => {
    const { $root: $linkRoot } = createLink(props);
    const { $root: $navLinkMixinRoot } = createSkipLinkMixin();

    return {
        $root: mergeProps($linkRoot, $navLinkMixinRoot),
    };
};
