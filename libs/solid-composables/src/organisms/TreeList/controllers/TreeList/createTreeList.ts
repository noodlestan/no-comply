import { createAriaTree } from '@no-comply/solid-accessibility';
import { combineProps, computedProps, withDefault } from '@no-comply/solid-primitives';
import { splitProps } from 'solid-js';

import { createTreeListContext } from '../../contexts';
import { ICONS, LABELS } from '../../private';
import { createTreeListKeyboardController } from '../TreeListKeyboard';

import type { TreeListAPI, TreeListProps } from './types';

export const createTreeList = (props: TreeListProps): TreeListAPI => {
    const [, others] = splitProps(props, ['labels', 'icons']);

    const contextProps = computedProps({
        labels: () => Object.assign({}, LABELS, props.labels),
        icons: () => Object.assign({}, ICONS, props.icons),
    });
    const contextValue = createTreeListContext(combineProps(others, contextProps));
    const [context] = contextValue;
    const { components } = context;

    const keyboard = withDefault(
        () => props.keyboard,
        () => createTreeListKeyboardController(() => props.root, context),
    );

    const { $root: $treeRoot, $label, $description } = createAriaTree(props);

    const expand = () => props.expand;
    const $static = {
        ref: (el: HTMLElement) => keyboard().$root.ref(el),
        onKeyDown: (ev: KeyboardEvent) => keyboard().$root.onKeyDown(ev),
    };
    const $root = computedProps($static, {
        expand,
    });

    const itemProps = computedProps({
        component: () => components().item,
        node: () => props.root,
        expand: () => props.expand,
    });

    return {
        $root: combineProps($treeRoot, $root),
        $label,
        $description,
        itemProps,
        context,
        contextValue,
    };
};
