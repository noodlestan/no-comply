import { type SelectionContext } from '@noodlestan/context-ui';
import type { ObjectWithId } from '@noodlestan/context-ui-primitives';
import { ReactiveSet } from '@solid-primitives/set';

import type { TreeState } from './types';

export const createTreeState = (
    selection?: SelectionContext,
    initialExpandedSet?: ReactiveSet<string>,
): TreeState => {
    const expanded = initialExpandedSet ?? new ReactiveSet<string>();
    let firstSelected: string | undefined;

    const isExpanded = (id: string) => expanded.has(id);

    const expand = (id: string | string[]) => {
        if (Array.isArray(id)) {
            id.forEach(i => expanded.add(i));
        } else {
            expanded.add(id);
        }
    };

    const toggleExpanded = (id: string) => {
        if (expanded.has(id)) {
            expanded.delete(id);
        } else {
            expanded.add(id);
        }
    };

    const collapse = (id: string | string[]) => {
        if (Array.isArray(id)) {
            id.forEach(i => expanded.delete(i));
        } else {
            expanded.delete(id);
        }
    };

    const getFirstSelected = (): ObjectWithId | undefined => {
        if (firstSelected) {
            return selection?.getById(firstSelected);
        }
    };

    const select = (object: ObjectWithId) => {
        if (!selection?.count()) {
            firstSelected = object.id;
        }
        selection?.select(object);
    };

    const deselect = (id: string) => {
        selection?.deselect(id);
        if (!selection?.count()) {
            firstSelected = undefined;
        }
    };

    const toggleSelected = (object: ObjectWithId) => {
        if (selection?.hasId(object.id)) {
            deselect(object.id);
        } else {
            select(object);
        }
    };

    const setSelection = (objects: ObjectWithId[]) => {
        firstSelected = objects.length ? objects[0]?.id : undefined;
        selection?.setSelection(objects);
    };

    const dispose = () => {
        expanded.clear();
    };

    return {
        isExpanded,
        expand,
        toggleExpanded,
        collapse,
        getSelection: selection?.objects ?? (() => []),
        getFirstSelected,
        isSelected: selection?.hasId ?? (() => false),
        select,
        toggleSelected,
        deselect,
        setSelection,
        clearSelection: selection?.clearSelection ?? (() => undefined),
        dispose,
    };
};
