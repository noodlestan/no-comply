import { mergeProps } from '@noodlestan/context-ui-primitives';

import { createTreeListItemDetails } from '../../controllers';
import { createTreeListItemDetailsMixin } from '../../mixins';

import type { TreeListItemDetailsBaseAPI, TreeListItemDetailsBaseProps } from './types';

export const createTreeListItemDetailsBase = (
    props: TreeListItemDetailsBaseProps,
): TreeListItemDetailsBaseAPI => {
    const {
        $root: $itemDetailsRoot,
        focusableProps: itemDetailsFocusableProps,
        expandButtonProps,
        itemContentsProps,
        hasToggle,
    } = createTreeListItemDetails(props);

    const {
        $root: $mixinRoot,
        $focusable: $mixinFocusable,
        $toggle,
        $contents,
    } = createTreeListItemDetailsMixin();

    const focusableProps = mergeProps(itemDetailsFocusableProps, $mixinFocusable);
    // const itemContentsProps = mergeProps(componentProps, $contents);

    return {
        $root: mergeProps($itemDetailsRoot, $mixinRoot),
        focusableProps,
        $toggle,
        expandButtonProps,
        $contents,
        itemContentsProps,
        hasToggle,
    };
};
