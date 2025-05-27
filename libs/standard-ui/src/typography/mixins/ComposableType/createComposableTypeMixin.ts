import { createComputedProps } from '@noodlestan/context-ui-primitives';

import { createActionLabelMixin } from '../ActionLabel';
import { createDisplayMixin } from '../Display';
import { createLabelMixin } from '../Label';
import { createTextMixin } from '../Text';

import type { ComposableTypeMixinAPI, ComposableTypeMixinProps } from './types';

export const createComposableTypeMixin = (
    props: ComposableTypeMixinProps,
): ComposableTypeMixinAPI => {
    const createTypeMixin = () => {
        if (props.type === 'action') {
            return createActionLabelMixin(props);
        }
        if (props.type === 'display') {
            return createDisplayMixin(props);
        }
        if (props.type === 'text') {
            return createTextMixin(props);
        }
        return createLabelMixin(props);
    };

    const typeMixinClassList = () => {
        const { $root } = createTypeMixin();
        return $root.classList;
    };
    const $typeRoot = createComputedProps({
        classList: typeMixinClassList,
    });

    return {
        $root: $typeRoot,
    };
};
