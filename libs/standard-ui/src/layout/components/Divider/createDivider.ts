import { combineProps } from '@no-comply/solid-primitives';

import { createDividerMixin } from '../../mixins';

import type { DividerAPI, DividerProps } from './types';

export const createDivider = (props: DividerProps): DividerAPI => {
    const { $root: $dividerMixinRoot } = createDividerMixin(props);

    const $root = {
        'data-component': 'divider' as const,
    };

    return {
        $root: combineProps($dividerMixinRoot, $root),
    };
};
