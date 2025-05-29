import type { ClassList } from '@no-comply/solid-primitives';

import type { ActionLabelMixinProps } from '../ActionLabel';
import type { DisplayMixinProps } from '../Display';
import type { LabelMixinProps } from '../Label';
import type { TextMixinProps } from '../Text';

export type ComposableActionLabelProps = ActionLabelMixinProps & {
    type: 'action';
};

export type ComposableDisplayProps = DisplayMixinProps & {
    type: 'display';
};

export type ComposableLabelProps = LabelMixinProps & {
    type: 'label';
};

export type ComposableTextProps = TextMixinProps & {
    type: 'text';
};

export type ComposableTypeMixinProps =
    | ComposableActionLabelProps
    | ComposableDisplayProps
    | ComposableLabelProps
    | ComposableTextProps;

export type ComposableTypeMixinAllProps = ActionLabelMixinProps &
    DisplayMixinProps &
    LabelMixinProps &
    TextMixinProps & {
        type: 'action' | 'display' | 'label' | 'text';
    };

export type ComposableTypeMixinAPI = {
    $root: {
        classList: ClassList;
    };
};
