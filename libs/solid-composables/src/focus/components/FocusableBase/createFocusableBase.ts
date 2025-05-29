import { mergeProps } from '@no-comply/solid-primitives';

import { createFocusable } from '../../controllers';
import { createFocusableMixin } from '../../mixins';

import type { FocusableBaseAPI, FocusableBaseProps } from './types';

export const createFocusableBase = (props: FocusableBaseProps): FocusableBaseAPI => {
    const { $root, ...rest } = createFocusable(props);

    const { $root: $focusableMixinRoot } = createFocusableMixin();

    return {
        ...rest,
        $root: mergeProps($root, $focusableMixinRoot),
    };
};
