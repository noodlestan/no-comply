import { type ParentComponent } from 'solid-js';
import { Dynamic } from 'solid-js/web';

import { createButton } from './createButton';
import type { ButtonProps } from './types';

export const Button: ParentComponent<ButtonProps> = props => {
    const { elProps } = createButton(props);
    return <Dynamic {...elProps} />;
};
