import type { ParentComponent } from 'solid-js';
import { Dynamic } from 'solid-js/web';

import { createDisplay } from './createDisplay';
import type { DisplayProps } from './types';

export const Display: ParentComponent<DisplayProps> = props => {
    const { elProps } = createDisplay(props);
    return <Dynamic {...elProps} />;
};
