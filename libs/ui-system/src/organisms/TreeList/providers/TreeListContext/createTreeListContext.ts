import type { Accessor } from 'solid-js';

import {
    type TreeKeyboardControllerAPI,
    type TreeState,
    createTreeKeyboardController,
    createTreeState,
} from '../../controllers';
import { ICONS, LABELS, type TreeListContextValue } from '../../private';
import type { TreeListOptions, TreeNode } from '../../types';

export const createTreeListContext = (
    root: Accessor<TreeNode>,
    options: TreeListOptions,
    initialState?: TreeState,
    keyboard?: TreeKeyboardControllerAPI,
): TreeListContextValue => {
    const state = initialState || createTreeState();
    const controller = keyboard || createTreeKeyboardController(root, state);

    const { component, icons: maybeIcons, labels: maybeLAbels, expand } = options;

    const labels = Object.assign({}, LABELS, maybeLAbels);
    const icons = Object.assign({}, ICONS, maybeIcons);

    const { label, labelledby, multiselectable, orientation } = options;

    return {
        root,
        component,
        options: {
            label,
            labelledby,
            multiselectable,
            orientation,
        },
        icons,
        labels,
        keyboard: controller,
        state,
        expand,
    };
};
