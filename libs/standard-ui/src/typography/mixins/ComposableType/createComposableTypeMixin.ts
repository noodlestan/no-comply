import { createExposable, exposeAPI } from '@no-comply/solid-contexts';
import { computedProps } from '@no-comply/solid-primitives';

import { createActionLabelMixin } from '../ActionLabel';
import { createDisplayMixin } from '../Display';
import { createLabelMixin } from '../Label';
import { createTextMixin } from '../Text';

import { $COMPOSABLE_TYPE_MIXIN } from './constants';
import type { ComposableTypeMixinAPI, ComposableTypeMixinProps } from './types';

export const createComposableTypeMixin = (
    props: ComposableTypeMixinProps,
): ComposableTypeMixinAPI => {
    const [locals, expose, compose] = createExposable($COMPOSABLE_TYPE_MIXIN, props);

    const createTypeMixin = () => {
        if (locals.type === 'action') {
            return createActionLabelMixin(locals);
        }
        if (locals.type === 'display') {
            return createDisplayMixin(locals);
        }
        if (locals.type === 'text') {
            return createTextMixin(locals);
        }
        return createLabelMixin(locals);
    };

    const typeMixinClassList = () => {
        const { $root } = createTypeMixin();
        return $root.classList;
    };

    const $root = computedProps({
        classList: typeMixinClassList,
    });

    compose(createTypeMixin);

    return exposeAPI(expose, '$root', {
        $root,
    });
};
