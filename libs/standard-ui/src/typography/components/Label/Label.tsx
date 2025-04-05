import type { ParentComponent } from 'solid-js';
import { Dynamic } from 'solid-js/web';

import { createLabel } from './createLabel';
import type { LabelProps } from './types';

export const Label: ParentComponent<LabelProps> = props => {
    const { elProps } = createLabel(props);
    return <Dynamic {...elProps} />;
};
