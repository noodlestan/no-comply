import { type ParentComponent } from 'solid-js';
import { Dynamic } from 'solid-js/web';

import { createFocusTrap } from '../../controllers';

import type { FocusTrapBaseProps } from './types';

export const FocusTrap: ParentComponent<FocusTrapBaseProps> = props => {
    const { elProps: containerProps } = createFocusTrap(props);

    return (
        <Dynamic component="div" {...containerProps}>
            {props.children}
        </Dynamic>
    );
};
