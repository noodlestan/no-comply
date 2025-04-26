import { createSelection } from '@noodlestan/context-ui';
import { type ObjectWithId, withDefault } from '@noodlestan/context-ui-primitives';
import { ReactiveSet } from '@solid-primitives/set';

import type { TreeListContextOptions, TreeListContextValue } from './types';

export const createTreeListContext = (options: TreeListContextOptions): TreeListContextValue => {
    const expanded = withDefault(
        () => options.expanded,
        () => new ReactiveSet<string>(),
    );
    const selected = withDefault(
        () => options.selected,
        () => createSelection()[0],
    );

    let firstSelected: string | undefined;

    const isExpanded = (id: string) => expanded().has(id);

    const expand = (id: string | string[]) => {
        if (Array.isArray(id)) {
            id.forEach(i => expanded().add(i));
        } else {
            expanded().add(id);
        }
    };

    const toggleExpanded = (id: string) => {
        if (expanded().has(id)) {
            expanded().delete(id);
        } else {
            expanded().add(id);
        }
    };

    const collapse = (id: string | string[]) => {
        if (Array.isArray(id)) {
            id.forEach(i => expanded().delete(i));
        } else {
            expanded().delete(id);
        }
    };

    const getFirstSelected = (): ObjectWithId | undefined => {
        if (firstSelected) {
            return selected().getById(firstSelected);
        }
    };

    const select = (object: ObjectWithId) => {
        if (!selected().count()) {
            firstSelected = object.id;
        }
        selected().select(object);
    };

    const deselect = (id: string) => {
        selected().deselect(id);
        if (!selected().count()) {
            firstSelected = undefined;
        }
    };

    const toggleSelected = (object: ObjectWithId) => {
        if (selected().hasId(object.id)) {
            deselect(object.id);
        } else {
            select(object);
        }
    };

    const setSelection = (objects: ObjectWithId[]) => {
        firstSelected = objects.length ? objects[0]?.id : undefined;
        selected().setSelection(objects);
    };

    const dispose = () => {
        expanded().clear();
    };

    const context = {
        type: 'tree-list' as const,
        components: () => options.components,
        labels: () => options.labels,
        icons: () => options.icons,
        root: () => options.root,
        isDisabled: () => Boolean(options.disabled),
        isExpanded,
        expand,
        toggleExpanded,
        collapse,
        getSelection: selected().objects ?? (() => []),
        getFirstSelected,
        isNodeSelected: selected().hasId ?? (() => false),
        select,
        toggleSelected,
        deselect,
        setSelection,
        clearSelection: selected().clearSelection ?? (() => undefined),
        dispose,
    };

    return [context];
};
