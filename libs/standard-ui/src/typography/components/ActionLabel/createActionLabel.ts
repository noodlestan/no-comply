import { type PickRequired, combineProps, computedProps } from '@no-comply/solid-primitives';

import { createActionLabelMixin } from '../..';

import type { ActionLabelAPI, ActionLabelProps } from './types';

const defaultProps: PickRequired<ActionLabelProps, 'tag'> = {
    tag: 'span',
};

export const createActionLabel = (props: ActionLabelProps): ActionLabelAPI => {
    const { $root: $actionlabelMixinRoot } = createActionLabelMixin(props);

    const component = () => props.tag ?? defaultProps.tag;
    const $root = computedProps({
        component,
    });

    return {
        $root: combineProps($actionlabelMixinRoot, $root),
    };
};
