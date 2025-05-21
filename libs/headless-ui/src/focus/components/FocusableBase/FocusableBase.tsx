import { FocusContextProvider } from '@noodlestan/context-ui';
import {
    type ClosedTagProps,
    type RenderProp,
    mergeProps,
} from '@noodlestan/context-ui-primitives';
import { type Component, splitProps } from 'solid-js';
import { Dynamic } from 'solid-js/web';

import type { FocusableAPI } from '../../controllers';

import { FOCUSABLE_BASE_PROPS } from './constants';
import { createFocusableBase } from './createFocusableBase';
import type { FocusableBaseProps } from './types';

type ChildrenProps = {
    focusable: FocusableAPI;
};

type Props = ClosedTagProps &
    FocusableBaseProps & {
        children: RenderProp<ChildrenProps>;
    };

export const FocusableBase: Component<Props> = props => {
    const [locals, $others] = splitProps(props, [...FOCUSABLE_BASE_PROPS, 'children']);

    const focusable = createFocusableBase(locals);
    const { $root, contextValue } = focusable;
    const $ = mergeProps($others, $root);

    return (
        <FocusContextProvider context={contextValue}>
            <Dynamic {...$}>
                <button {...focusable.$target} />
                {locals.children({ focusable })}
            </Dynamic>
        </FocusContextProvider>
    );
};
