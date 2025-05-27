import {
    type PickRequired,
    createComputedProps,
    mergeProps,
} from '@noodlestan/context-ui-primitives';

import { createActionLabelMixin } from '../..';

import type { ActionLabelAPI, ActionLabelProps } from './types';

const defaultProps: PickRequired<ActionLabelProps, 'tag'> = {
    tag: 'span',
};

export const createActionLabel = (props: ActionLabelProps): ActionLabelAPI => {
    const { $root: $actionlabelMixinRoot } = createActionLabelMixin(props);

    const component = () => props.tag ?? defaultProps.tag;
    const $localRoot = createComputedProps({
        component,
    });

    return {
        $root: mergeProps($actionlabelMixinRoot, $localRoot),
    };
};
