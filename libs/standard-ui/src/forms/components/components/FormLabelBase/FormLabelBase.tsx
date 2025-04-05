import type { ParentComponent } from 'solid-js';

import { createFieldLabelMixin } from '@noodlestan/headless-ui/src/forms/mixins';

import type { LabelBaseProps } from './types';

export const LabelBase: ParentComponent<LabelBaseProps> = props => {
    const { elProps } = createFieldLabelMixin(props);

    return <label {...elProps}>{props.children}</label>;
};
