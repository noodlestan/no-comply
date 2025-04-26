import { mergeProps } from '@noodlestan/context-ui-primitives';

import { createFocusable } from '../../controllers';
import { createFocusableMixin } from '../../mixins';

import type { FocusableBaseAPI, FocusableBaseProps } from './types';

export const createFocusableBase = (props: FocusableBaseProps): FocusableBaseAPI => {
    const { $root, ...rest } = createFocusable(props);

    const { $root: $focusableMixinRoot } = createFocusableMixin();

    return {
        $root: mergeProps($root, $focusableMixinRoot),
        ...rest,
    };
};
