import type { ParentComponent } from 'solid-js';
import { Dynamic } from 'solid-js/web';

import { createText } from './createText';
import type { TextProps } from './types';

export const Text: ParentComponent<TextProps> = props => {
    const { elProps } = createText(props);
    return <Dynamic {...elProps} />;
};
