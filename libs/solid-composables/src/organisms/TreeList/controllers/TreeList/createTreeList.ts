import { createAriaTree } from '@no-comply/solid-accessibility';
import { createExposable, exposeAPI } from '@no-comply/solid-contexts';
import { combineProps, computedProps, withDefault } from '@no-comply/solid-primitives';
import { splitProps } from 'solid-js';

import { createTreeListContext } from '../../contexts';
import { ICONS, LABELS } from '../../private';
import { createTreeListKeyboardController } from '../TreeListKeyboard';

import { $TREE_LIST } from './constants';
import type { TreeListAPI, TreeListProps } from './types';

export const createTreeList = (props: TreeListProps): TreeListAPI => {
    const [locals, expose, compose] = createExposable($TREE_LIST, props);

    const [, others] = splitProps(locals, ['labels', 'icons']);

    const contextOptions = computedProps({
        labels: () => Object.assign({}, LABELS, locals.labels),
        icons: () => Object.assign({}, ICONS, locals.icons),
    });
    const allContextOptions = combineProps(others, contextOptions);
    const contextValue = compose(createTreeListContext(allContextOptions));
    const [context] = contextValue;
    const { components } = context;

    const keyboard = withDefault(
        () => locals.keyboard,
        () => createTreeListKeyboardController(() => locals.root, context),
    );

    const { $root: $treeRoot, $label, $description } = createAriaTree(locals);

    const expand = () => locals.expand;
    const $root = computedProps({
        expand,
    });

    const _treeListItem = computedProps({
        component: () => components().item,
        node: () => locals.root,
        expand: () => locals.expand,
    });

    return exposeAPI(expose, '$root', {
        $root: combineProps(() => keyboard().$root, $treeRoot, $root),
        $label,
        $description,
        _treeListItem,
        context,
        contextValue,
    });
};
