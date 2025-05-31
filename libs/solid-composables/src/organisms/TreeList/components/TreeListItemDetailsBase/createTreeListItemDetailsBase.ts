import { combineProps } from '@no-comply/solid-primitives';

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

    const focusableProps = combineProps(itemDetailsFocusableProps, $mixinFocusable);
    // const itemContentsProps = combineProps(componentProps, $contents);

    return {
        $root: combineProps($itemDetailsRoot, $mixinRoot),
        focusableProps,
        $toggle,
        expandButtonProps,
        $contents,
        itemContentsProps,
        hasToggle,
    };
};
