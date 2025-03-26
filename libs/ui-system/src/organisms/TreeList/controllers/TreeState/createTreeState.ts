import { ReactiveSet } from '@solid-primitives/set';

import { type SelectionAPI, createSelection } from '../../../../providers';
import type { ObjectWithId } from '../../../../types';

import type { TreeState } from './types';

export const createTreeState = (
    initialSelection?: SelectionAPI,
    initialExpandedSet?: ReactiveSet<string>,
): TreeState => {
    console.info('createTreeState()');

    const selected = initialSelection || createSelection();
    const expanded = initialExpandedSet || new ReactiveSet<string>();
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
            return selected.getById(firstSelected);
        }
    };

    const select = (object: ObjectWithId) => {
        if (!selected.count()) {
            firstSelected = object.id;
        }
        selected.select(object);
    };

    const deselect = (id: string) => {
        selected.deselect(id);
        if (!selected.count()) {
            firstSelected = undefined;
        }
    };

    const toggleSelected = (object: ObjectWithId) => {
        if (selected.hasId(object.id)) {
            deselect(object.id);
        } else {
            select(object);
        }
    };

    const setSelection = (objects: ObjectWithId[]) => {
        firstSelected = objects.length ? objects[0]?.id : undefined;
        selected.setSelection(objects);
    };

    const dispose = () => {
        expanded.clear();
    };

    return {
        isExpanded,
        expand,
        toggleExpanded,
        collapse,
        getSelection: selected.objects,
        getFirstSelected,
        isSelected: selected.hasId,
        select,
        toggleSelected,
        deselect,
        setSelection,
        clearSelection: selected.clearSelection,
        dispose,
    };
};
