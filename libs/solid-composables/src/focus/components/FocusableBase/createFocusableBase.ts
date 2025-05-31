import { createExposable, exposeAPI } from '@no-comply/solid-contexts';
import { combineProps } from '@no-comply/solid-primitives';

import { createFocusable } from '../../controllers';
import { createFocusableMixin } from '../../mixins';

import { $FOCUSABLE_BASE } from './constants';
import type { FocusableBaseAPI, FocusableBaseProps } from './types';

export const createFocusableBase = (props: FocusableBaseProps): FocusableBaseAPI => {
    const [locals, expose, compose] = createExposable($FOCUSABLE_BASE, props);

    const { $root: $focusableRoot, ...rest } = compose(createFocusable(locals));
    const { $root: $focusableMixinRoot } = compose(createFocusableMixin());

    return exposeAPI(expose, '$root', {
        ...rest,
        $root: combineProps($focusableRoot, $focusableMixinRoot),
    });
};
