import { mergeProps } from '@no-comply/solid-primitives';
import { type Component, Show, splitProps } from 'solid-js';
import { Dynamic } from 'solid-js/web';

import { FocusableBase } from '../../../../focus';
import { FlexBase, LayoutBase } from '../../../../layout';

import { TREE_LIST_ITEM_DETAILS_BASE_PROPS } from './constants';
import { createTreeListItemDetailsBase } from './createTreeListItemDetailsBase';
import type { TreeListItemDetailsBaseProps } from './types';

export const TreeListItemDetailsBase: Component<TreeListItemDetailsBaseProps> = props => {
    const [locals, $others] = splitProps(props, TREE_LIST_ITEM_DETAILS_BASE_PROPS);

    const {
        $root,
        focusableProps,
        $toggle,
        expandButtonProps,
        $contents,
        itemContentsProps,
        hasToggle,
    } = createTreeListItemDetailsBase(locals);

    const $ = mergeProps($others, $root);

    return (
        <LayoutBase stretch="full" {...$}>
            <FocusableBase {...focusableProps}>
                {() => (
                    <FlexBase direction="row" align="center">
                        <Show when={hasToggle()}>
                            <div {...$toggle}>
                                <Dynamic {...expandButtonProps} />
                            </div>
                        </Show>
                        <FlexBase stretch="width" {...$contents}>
                            <Dynamic {...itemContentsProps} />
                        </FlexBase>
                    </FlexBase>
                )}
            </FocusableBase>
        </LayoutBase>
    );
};
