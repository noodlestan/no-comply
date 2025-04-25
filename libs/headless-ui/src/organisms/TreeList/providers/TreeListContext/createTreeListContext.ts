import { createComputedProps, mergeProps } from '@noodlestan/context-ui-primitives';
import type { Accessor } from 'solid-js';

import {
    type TreeKeyboardControllerAPI,
    type TreeState,
    createTreeKeyboardController,
    createTreeState,
} from '../../controllers';
import { ICONS, LABELS, type TreeListContextValue } from '../../private';
import type { TreeListProps, TreeNode } from '../../types';

export const createTreeListContext = (
    root: Accessor<TreeNode>,
    props: TreeListProps,
    initialState?: TreeState,
    keyboard?: TreeKeyboardControllerAPI,
): TreeListContextValue => {
    const state = initialState ?? createTreeState();

    const controller = keyboard ?? createTreeKeyboardController(root, state);

    const staticProps = {
        root,
        state,
        keyboard: controller,
    };

    const baseProps = mergeProps(staticProps, props);

    const value = createComputedProps(baseProps, {
        labels: () => Object.assign({}, LABELS, props.labels),
        icons: () => Object.assign({}, ICONS, props.icons),
    });

    return value;
};
