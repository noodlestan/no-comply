import { createFocusContext } from '@noodlestan/context-ui';
import { createClassList } from '@noodlestan/context-ui-primitives';
import { type ParentComponent, createMemo, splitProps } from 'solid-js';
import { Dynamic } from 'solid-js/web';

import { createFocusable } from '../../controllers';

import styles from './FocusableBase.module.css';
import type { FocusableBaseProps } from './types';

// const LABELS: FocusableLabels = {
//     region: `Details`,
// };

export const FocusableBase: ParentComponent<FocusableBaseProps> = props => {
    const [locals] = splitProps(props, ['labels', 'children', 'classList']);

    // const labels = () => Object.assign({}, LABELS, locals.labels);

    const focusable = createMemo(() => {
        if (locals.focusable) {
            return locals.focusable;
        }
        return createFocusable(createFocusContext(), props);
    });

    const classList = createClassList(styles, 'Focusable', () => locals.classList);

    return (
        <Dynamic classList={classList()} {...focusable().containerProps}>
            <button {...focusable().targetProps} />
            {locals.children}
        </Dynamic>
    );
};
